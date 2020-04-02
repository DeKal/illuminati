import { get, post } from 'core/api'

const fetchPostFromSlug = async slug => {
  return await get(`post/${slug}`)
}

const savingPost = async postData => {
  return await post('post/save', postData)
}

const createPost = async postData => {
  return await post('post/create', postData)
}

export { fetchPostFromSlug, savingPost, createPost }
