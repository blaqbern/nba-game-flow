export function getQueryString(obj: Object) {
  return Object.keys(obj).reduce((acc, next) => {
    const param = `${next}=${obj[next]}`
    return Object.keys(obj).indexOf(next) === 0
      ? `?${param}`
      : `&${param}`
  }, '')
}
