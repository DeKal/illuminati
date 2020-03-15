import { connect } from 'react-redux'
import Posts from 'posts/components/Posts'

import { getSelectedPosts, getPosts } from 'posts/state/selectors'
import { fetchPostSummary } from 'posts/state/actions'

const mapStateToProps = state => ({
  posts: getPosts(state),
  selectedPosts: getSelectedPosts(state)
})

const mapDispatchToProps = {
  fetchPostSummary
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
