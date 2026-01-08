// Polyfill for browser globals in Node
if (typeof self === "undefined") {
  // Since we're running in Node, assign self to global (or globalThis)
  (global as any).self = global;
}
