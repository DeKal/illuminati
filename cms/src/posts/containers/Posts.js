import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
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

const PostsWithHook = props => {
  const { fetchPostSummary } = props
  useEffect(() => {
    fetchPostSummary()
  }, [fetchPostSummary])
  return <Posts {...props} />
}
PostsWithHook.propTypes = {
  fetchPostSummary: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsWithHook)
