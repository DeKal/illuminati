import { get } from 'core/api'

const fetchPostSummary = async () => {
  return await get('post/all-post/summary')
}

export { fetchPostSummary }
