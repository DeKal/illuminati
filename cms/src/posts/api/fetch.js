import axios from 'axios'
import { isSuccess, getData, getError } from 'core/api/selectors'
const API_END_POINT = 'https://illuminati-staging.herokuapp.com/api'

const fetchPostSummary = async () => {
  const result = await axios.get(`${API_END_POINT}/post/all-post/summary`)
  const { data: response } = result
  if (isSuccess(response)) {
    return getData(response)
  }
  const error = getError(response)
  console.error(
    `There was an error with code ${error.code} and message "${error.message}"`
  )
  return []
}

export { fetchPostSummary }
