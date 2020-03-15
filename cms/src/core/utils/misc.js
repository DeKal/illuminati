export const isPathMatchUrl = (pathName, url) => {
  if (url === '/' || pathName === '/') {
    return pathName === url
  }
  return pathName.includes(url)
}

export const stringtifyTags = (tags, limits = 20) => {
  const tagsStr = tags.join(', ')
  if (tagsStr.length > limits) {
    return tagsStr.slice(0, limits) + '...'
  }
  return tagsStr
}
