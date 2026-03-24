"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fmt = fmt;
/**
 * Replace {key} tokens in a localised string template with runtime values.
 * Example: fmt("Hello {name}, you have {n} tasks", { name: "Alice", n: 3 })
 *          → "Hello Alice, you have 3 tasks"
 */
function fmt(template, values) {
    return template.replace(/\{(\w+)\}/g, function (_, k) { var _a; return String((_a = values[k]) !== null && _a !== void 0 ? _a : "{".concat(k, "}")); });
}
//# sourceMappingURL=fmt.js.map