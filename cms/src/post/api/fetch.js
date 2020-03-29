import axios from 'axios'
import { isSuccess, getData, getError } from 'core/api/selectors'
import { API_END_POINT } from 'core/api'

const fetchPostFromSlug = async slug => {
  const result = await axios.get(`${API_END_POINT}/post/${slug}`)
  const { data: response } = result
  if (isSuccess(response)) {
    return getData(response)
  }
  const error = getError(response)
  console.error(
    `There was an error with code ${error.code} and message "${error.message}"`
  )
  return {}
}

const savingPost = async post => {
  const result = await axios.post(`${API_END_POINT}/post/save`, post)
  const { data: response } = result
  if (isSuccess(response)) {
    return getData(response)
  }
  const error = getError(response)
  throw error
}

export { fetchPostFromSlug, savingPost }
