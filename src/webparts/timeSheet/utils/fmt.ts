/**
 * Replace {key} tokens in a localised string template with runtime values.
 * Example: fmt("Hello {name}, you have {n} tasks", { name: "Alice", n: 3 })
 *          → "Hello Alice, you have 3 tasks"
 */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? `{${k}}`));
}
