import axios from 'axios'
import { isSuccess, getData, getError } from 'core/api/selectors'

export const API_END_POINT = process.env.REACT_APP_API_END_POINT

export const get = async target => {
  const result = await axios.get(`${API_END_POINT}/${target}`)
  const { data: response } = result
  return handleResponse(response)
}

export const post = async (target, data) => {
  const result = await axios.post(`${API_END_POINT}/${target}`, data)
  const { data: response } = result
  return handleResponse(response)
}

const handleResponse = response => {
  if (isSuccess(response)) {
    return getData(response)
  }
  const error = getError(response)
  throw error
}
