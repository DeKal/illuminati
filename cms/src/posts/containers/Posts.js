import { connect } from 'react-redux'
import Posts from 'posts/components/Posts'

import { getSelectedPosts, getPosts } from 'posts/state/selectors'

const mapStateToProps = state => ({
  posts: getPosts(state),
  selectedPosts: getSelectedPosts(state)
})

export default connect(mapStateToProps)(Posts)
