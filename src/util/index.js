/* eslint import/prefer-default-export: "off" */
export function isObject(value) {
  return value !== null && typeof value === 'object';
}

export function isUndefined(value) {
  return typeof value === 'undefined';
}
