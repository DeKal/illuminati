import { POSTS_PER_PAGE } from 'core/const/posts'

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

export const calcMaxRowsPerPage = postCount => {
  const postsPerPageOptions = []
  for (let index = 0; index < POSTS_PER_PAGE.length; index++) {
    postsPerPageOptions.push(POSTS_PER_PAGE[index])
    if (POSTS_PER_PAGE[index] > postCount) {
      break
    }
  }
  return postsPerPageOptions
}
