import { FUNCTIONS } from '../functions';

interface FunctionCallNode {
  call?: string;
  args?: Record<string, unknown>;
}

export const isFunctionCallNode = (value: unknown): value is FunctionCallNode =>
  typeof value === 'object' &&
  value !== null &&
  !Array.isArray(value) &&
  typeof (value as { call?: unknown }).call === 'string';

export const evaluate = (value: unknown): unknown => {
  if (isFunctionCallNode(value)) {
    const args: Record<string, unknown> = {};
    Object.entries(value.args ?? {}).forEach(([key, argValue]) => {
      args[key] = evaluate(argValue);
    });
    const impl = FUNCTIONS[value.call as string];
    return impl ? impl(args, { rootModel: {}, scopeModel: {} }) : undefined;
  }
  if (Array.isArray(value)) {
    return value.map(evaluate);
  }
  return value;
};

export const isHidden = (accessibility: unknown): boolean => {
  if (typeof accessibility !== 'object' || accessibility === null) return false;
  const { hidden } = accessibility as { hidden?: unknown };
  if (hidden === undefined) return false;
  return evaluate(hidden) === true;
};

interface RawCheck {
  condition?: unknown;
  message: string;
}

export const firstCheckError = (checks: unknown): string | undefined => {
  if (!Array.isArray(checks)) return undefined;
  const failed = checks.find(
    (check): check is RawCheck =>
      typeof check === 'object' &&
      check !== null &&
      typeof (check as { message?: unknown }).message === 'string' &&
      evaluate((check as RawCheck).condition) !== true
  );
  return failed ? failed.message : undefined;
};

export const hasInvalidCheck = (checks: unknown): boolean => firstCheckError(checks) !== undefined;
