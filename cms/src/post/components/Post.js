import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import PostEditor from 'core/async-components/PostEditor'
import Loading from 'core/components/Loading'
import Container from 'core/components/Container'
import Paper from 'core/components/Paper'
import Grid from 'post/components/Grid'
import PostButton from 'post/components/Button'

import Title from 'post/containers/Title'
import Slug from 'post/containers/Slug'
import Author from 'post/containers/Author'
import Time from 'post/containers/Time'
import Brief from 'post/containers/Brief'
import Tags from 'post/containers/Tags'

const Post = ({ loading, newPost, saveEditedContent, createPost }) => {
  if (loading) {
    return <Loading />
  }
  return (
    <Container>
      <Paper>
        <Grid container style={{ padding: '16px' }} spacing={3}>
          <Grid item sm={11}>
            {newPost ? (
              <Typography variant="h6">New Post</Typography>
            ) : (
              <Typography variant="h6">Editing Post</Typography>
            )}
          </Grid>
        </Grid>
        <Grid container>
          <Grid container item direction="column" xs={12} sm={8} spacing={3}>
            <Grid item>
              <Title />
            </Grid>
            <Grid item>
              <Brief />
            </Grid>
            <Grid item>
              <PostEditor />
            </Grid>
          </Grid>
          <Grid container item direction="column" xs={6} sm={4}>
            <Grid item>
              <Slug />
            </Grid>
            <Grid item>
              <Author />
            </Grid>
            <Grid item>
              <Time />
            </Grid>
            <Grid item>
              <Tags />
            </Grid>
            <Grid item>
              <PostButton
                variant="contained"
                size="large"
                color="primary"
                onClick={() => (newPost ? createPost() : saveEditedContent())}
              >
                Save
              </PostButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

Post.propTypes = {
  newPost: PropTypes.bool,
  loading: PropTypes.bool,
  saveEditedContent: PropTypes.func,
  createPost: PropTypes.func
}

export default Post
