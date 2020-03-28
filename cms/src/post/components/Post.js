import React from 'react'
import PropTypes from 'prop-types'
import Container from 'core/components/Container'
import Paper from 'core/components/Paper'

const Post = () => {
  return (
    <Container>
      <Paper></Paper>
    </Container>
  )
}

export default Post

Post.propTypes = {
  posts: PropTypes.array,
  selectedPosts: PropTypes.array,
  fetchPostSummary: PropTypes.func
}
