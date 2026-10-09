/**
 * x-card 注入给每个自定义组件的运行时能力（源码：lib/A2UI/Card.js NodeRenderer）。
 * - onAction(name, context)：触发 action，x-card 会用 action.event.context 的 { path } 作为写入目标
 * - onDataChange(path, value)：双向绑定，把值写回数据模型
 */
export interface A2UIInjectedProps {
  accessibility?: unknown;
  checks?: unknown;
  onAction?: (name: string, context?: Record<string, unknown>) => void;
  onDataChange?: (path: string, value: unknown) => void;
}
