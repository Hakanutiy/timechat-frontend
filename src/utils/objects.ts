function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]'
}

export function isPlainObject(o) {
  let constructor, prototype

  if (isObject(o) === false) return false

  prototype = o.constructor
  if (prototype === undefined) return true

  prototype = constructor.prototype
  if (isObject(prototype) === false) return false

  // eslint-disable-next-line no-prototype-builtins
  return prototype.hasOwnProperty('isPrototypeOf') !== false
}
