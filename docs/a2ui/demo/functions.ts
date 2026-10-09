import dayjs from 'dayjs';

export interface FunctionContext {
  rootModel: Record<string, unknown>;
  scopeModel: Record<string, unknown>;
}

type FunctionReturnType = 'string' | 'number' | 'boolean' | 'array' | 'object' | 'any' | 'void';

type FunctionImpl = (args: Record<string, unknown>, ctx: FunctionContext) => unknown;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const decodePointerSegment = (segment: string): string =>
  segment.replace(/~1/g, '/').replace(/~0/g, '~');

function getByPath(model: Record<string, unknown>, path: string): unknown {
  if (!path || path === '/') return model;
  const parts = path.split('/').filter(Boolean).map(decodePointerSegment);
  let current: unknown = model;
  for (let i = 0; i < parts.length; i += 1) {
    if (!isRecord(current)) return undefined;
    current = current[parts[i]];
  }
  return current;
}

function required(args: Record<string, unknown>): boolean {
  const { value } = args;
  if (value == null) return false;
  if (typeof value === 'string') return value.trim() !== '';
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

function regex(args: Record<string, unknown>): boolean {
  const pattern = String(args.pattern ?? '');
  if (!pattern) return true;
  try {
    return new RegExp(pattern).test(String(args.value ?? ''));
  } catch {
    return false;
  }
}

function length(args: Record<string, unknown>): boolean {
  const len = String(args.value ?? '').length;
  const min = args.min == null ? null : Number(args.min);
  const max = args.max == null ? null : Number(args.max);
  if (min != null && len < min) return false;
  if (max != null && len > max) return false;
  return true;
}

function numeric(args: Record<string, unknown>): boolean {
  const n = Number(args.value);
  if (!Number.isFinite(n)) return false;
  const min = args.min == null ? null : Number(args.min);
  const max = args.max == null ? null : Number(args.max);
  if (min != null && n < min) return false;
  if (max != null && n > max) return false;
  return true;
}

function email(args: Record<string, unknown>): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(args.value ?? ''));
}

function and(args: Record<string, unknown>): boolean {
  const values = Array.isArray(args.values) ? args.values : [];
  return values.every((v) => Boolean(v));
}

function or(args: Record<string, unknown>): boolean {
  const values = Array.isArray(args.values) ? args.values : [];
  return values.some((v) => Boolean(v));
}

function not(args: Record<string, unknown>): boolean {
  return !args.value;
}

function eq(args: Record<string, unknown>): boolean {
  return args.value === args.equals;
}

function contains(args: Record<string, unknown>): boolean {
  const { value, item } = args;
  if (!Array.isArray(value)) return false;
  return value.some((v) => v === item);
}

function formatNumber(args: Record<string, unknown>): string {
  const value = Number(args.value ?? 0);
  const decimals = args.decimals == null ? undefined : Number(args.decimals);
  const grouping = args.grouping == null ? true : Boolean(args.grouping);
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals ?? 0,
    maximumFractionDigits: decimals ?? 2,
    useGrouping: grouping
  }).format(value);
}

function formatCurrency(args: Record<string, unknown>): string {
  const value = Number(args.value ?? 0);
  const currency = String(args.currency ?? 'USD');
  const decimals = args.decimals == null ? undefined : Number(args.decimals);
  const grouping = args.grouping == null ? true : Boolean(args.grouping);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals ?? 2,
    maximumFractionDigits: decimals ?? 2,
    useGrouping: grouping
  }).format(value);
}

function toDayjsPattern(pattern: string): string {
  const tokens: Array<[RegExp, string]> = [
    [/yyyy/g, 'YYYY'],
    [/yy/g, 'YY'],
    [/EEEE/g, 'dddd'],
    [/EEE/g, 'ddd'],
    [/dd/g, 'DD'],
    [/d/g, 'D'],
    [/MMMM/g, 'MMMM'],
    [/MMM/g, 'MMM'],
    [/a/g, 'A']
  ];
  return tokens.reduce((acc, [from, to]) => acc.replace(from, to), pattern);
}

function formatDate(args: Record<string, unknown>): string {
  const { value } = args;
  const pattern = String(args.format ?? 'yyyy-MM-dd');
  if (value == null || value === '') return '';
  const date = dayjs(value as string | number | Date);
  return date.isValid() ? date.format(toDayjsPattern(pattern)) : '';
}

function pluralize(args: Record<string, unknown>): string {
  const count = Number(args.value ?? 0);
  const category = count === 1 ? 'one' : 'other';
  const matched = args[category];
  const fallback = args.other;
  return matched == null ? String(fallback ?? '') : String(matched);
}

function openUrl(args: Record<string, unknown>): void {
  const url = String(args.url ?? '');
  if (!url || typeof window === 'undefined') return;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* eslint-disable @typescript-eslint/no-use-before-define */

function formatString(args: Record<string, unknown>, ctx: FunctionContext): string {
  return interpolate(String(args.value ?? ''), ctx);
}

const INTERPOLATION = /\$\{([^{}]*)\}/g;

function interpolate(template: string, ctx: FunctionContext): string {
  return template.replace(INTERPOLATION, (_match, raw: string) => {
    const value = evaluateExpression(String(raw).trim(), ctx);
    return value == null ? '' : String(value);
  });
}

function evaluateExpression(expr: string, ctx: FunctionContext): unknown {
  const openParen = expr.indexOf('(');
  if (openParen > 0 && expr.endsWith(')')) {
    const name = expr.slice(0, openParen).trim();
    const inner = expr.slice(openParen + 1, -1).trim();
    const args = parseNamedArgs(inner, ctx);
    return FUNCTIONS[name]?.(args, ctx);
  }
  return resolvePath(expr, ctx);
}

function resolvePath(expr: string, ctx: FunctionContext): unknown {
  if (expr.startsWith('/')) return getByPath(ctx.rootModel, expr);
  return getByPath(ctx.scopeModel, `/${expr}`);
}

function parseNamedArgs(inner: string, ctx: FunctionContext): Record<string, unknown> {
  const args: Record<string, unknown> = {};
  if (!inner) return args;
  inner.split(',').forEach((pair) => {
    const colon = pair.indexOf(':');
    if (colon < 0) return;
    const key = pair.slice(0, colon).trim();
    const valueExpr = pair.slice(colon + 1).trim();
    args[key] = evaluateExpression(stripQuotes(valueExpr), ctx);
  });
  return args;
}

function stripQuotes(text: string): string {
  if (
    text.length >= 2 &&
    (text[0] === "'" || text[0] === '"') &&
    text[text.length - 1] === text[0]
  ) {
    return text.slice(1, -1);
  }
  return text;
}

/* eslint-enable @typescript-eslint/no-use-before-define */

export const FUNCTIONS: Record<string, FunctionImpl> = {
  required,
  regex,
  length,
  numeric,
  email,
  and,
  or,
  not,
  eq,
  contains,
  formatNumber,
  formatCurrency,
  formatDate,
  pluralize,
  formatString,
  openUrl
};

export function callFunction(
  name: string,
  args: Record<string, unknown>,
  ctx: FunctionContext
): unknown {
  const impl = FUNCTIONS[name];
  return impl ? impl(args, ctx) : undefined;
}

export const FUNCTION_RETURN_TYPES: Record<string, FunctionReturnType> = {
  required: 'boolean',
  regex: 'boolean',
  length: 'boolean',
  numeric: 'boolean',
  email: 'boolean',
  and: 'boolean',
  or: 'boolean',
  not: 'boolean',
  eq: 'boolean',
  contains: 'boolean',
  formatNumber: 'string',
  formatCurrency: 'string',
  formatDate: 'string',
  pluralize: 'string',
  formatString: 'string',
  openUrl: 'void'
};
