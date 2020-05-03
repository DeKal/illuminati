import React from 'react'
import PropTypes from 'prop-types'
import TableContainer from '@material-ui/core/TableContainer'
import Container from 'core/components/Container'
import Head from 'posts/containers/Head'
import Pagination from 'posts/containers/Pagination'
import Body from 'posts/containers/Body'
import SelectedToolbar from 'posts/containers/SelectedToolbar'
import Paper from 'core/components/Paper'
import Table from 'posts/components/Posts/Table'
import Loading from 'core/components/Loading'

const Posts = ({ posts, selectedPosts }) => {
  const numSelected = selectedPosts.length
  const rowCount = posts.length
  if (rowCount === 0) {
    return <Loading />
  }
  return (
    <Container>
      <Paper>
        <SelectedToolbar numSelected={numSelected} />
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
            style={{ marginBottom: '15px', overflow: 'auto' }}
          >
            <Head numSelected={numSelected} rowCount={rowCount} />
            <Body posts={posts} selectedPosts={selectedPosts} />
          </Table>
        </TableContainer>
        <Pagination postCount={rowCount} />
      </Paper>
    </Container>
  )
}

export default Posts

Posts.propTypes = {
  posts: PropTypes.array,
  selectedPosts: PropTypes.array,
  fetchPostSummary: PropTypes.func
}
