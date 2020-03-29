import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPost, saveEditedContent } from 'post/state/actions'
import { getIsPostLoading } from 'post/state/selectors'

import Post from 'post/components/Post'

const mapStateToProps = state => ({
  loading: getIsPostLoading(state)
})

const mapDispatchToProps = {
  fetchPost,
  saveEditedContent
}

const PostWithHook = props => {
  const { fetchPost } = props
  const { slug } = useParams()

  useEffect(() => {
    fetchPost(slug)
  }, [slug, fetchPost])
  return <Post {...props} />
}
PostWithHook.propTypes = {
  fetchPost: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(PostWithHook)
