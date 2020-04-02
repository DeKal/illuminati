import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  fetchPost,
  saveEditedContent,
  createPost,
  initPost
} from 'post/state/actions'
import { getIsPostLoading } from 'post/state/selectors'

import Post from 'post/components/Post'

const mapStateToProps = state => ({
  loading: getIsPostLoading(state)
})

const mapDispatchToProps = {
  fetchPost,
  saveEditedContent,
  createPost,
  initPost
}

const PostWithHook = props => {
  const { fetchPost, initPost } = props
  const { slug } = useParams()
  const newPost = slug === 'new'
  useEffect(() => {
    if (!newPost) {
      fetchPost(slug)
    } else {
      initPost()
    }
  }, [slug, fetchPost, initPost, newPost])
  return <Post {...props} newPost={newPost} />
}
PostWithHook.propTypes = {
  newPost: PropTypes.bool,
  fetchPost: PropTypes.func,
  initPost: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(PostWithHook)
