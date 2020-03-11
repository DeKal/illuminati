export const isPathMatchUrl = (pathName, url) => {
  if (url === '/' || pathName === '/') {
    return pathName === url
  }
  return pathName.includes(url)
}
