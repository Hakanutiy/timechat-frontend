export function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]'
}
