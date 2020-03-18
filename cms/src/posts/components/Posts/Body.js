import React from 'react'
import PropTypes from 'prop-types'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import { stableSort, getComparator } from 'core/utils/sort'
import { stringtifyTags } from 'core/utils/misc'
import PostTableCell from 'posts/components/Body/PostTableCell'
import EmptyRows from 'posts/components/Body/EmptyRows'

const Body = ({
  posts,
  page,
  rowsPerPage,
  order,
  selectedPosts,
  orderColumn,
  setSelectedPost,
  history
}) => (
  <TableBody>
    {stableSort(posts, getComparator(order, orderColumn))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        const isItemSelected = selectedPosts.indexOf(row.slug) !== -1
        const labelId = `enhanced-table-checkbox-${index}`

        return (
          <TableRow
            hover
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.slug}
            selected={isItemSelected}
          >
            <TableCell padding="checkbox">
              <Checkbox
                data-test-id={`body-checkbox-${index}`}
                checked={isItemSelected}
                inputProps={{ 'aria-labelledby': labelId }}
                onClick={() => setSelectedPost(row.slug)}
              />
            </TableCell>
            <PostTableCell
              component="th"
              id={labelId}
              scope="row"
              padding="none"
              data-test-id={`body-title-${index}`}
              onClick={() => history.push(`post/${row.slug}`)}
            >
              {row.title}
            </PostTableCell>
            <TableCell>{row.author}</TableCell>
            <TableCell>{row.time}</TableCell>
            <TableCell style={{ whiteSpace: 'nowrap' }}>
              {stringtifyTags(row.tag)}
            </TableCell>
            <TableCell align="right">{row.commentNum}</TableCell>
          </TableRow>
        )
      })}
    <EmptyRows
      page={page}
      rowsPerPage={rowsPerPage}
      postsLength={posts.length}
    />
  </TableBody>
)

export default Body

Body.propTypes = {
  posts: PropTypes.array,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  order: PropTypes.string,
  orderColumn: PropTypes.string,
  selectedPosts: PropTypes.array,
  setSelectedPost: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  })
}
