import React from 'react'
import PropTypes from 'prop-types'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import { stableSort, getComparator } from 'core/utils/sort'
import { stringtifyTags } from 'core/utils/misc'
import PostTitle from 'posts/components/Posts/PostTitle'

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
            onClick={() => setSelectedPost(row.slug)}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={isItemSelected}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </TableCell>
            <PostTitle
              component="th"
              id={labelId}
              scope="row"
              padding="none"
              onClick={e => {
                e.stopPropagation()
                history.push(`post/${row.slug}`)
              }}
            >
              {row.title}
            </PostTitle>
            <TableCell>{row.author}</TableCell>
            <TableCell>{stringtifyTags(row.tag)}</TableCell>
            <TableCell align="right">{row.commentNum}</TableCell>
            <TableCell>{row.time}</TableCell>
          </TableRow>
        )
      })}
    {renderEmptyRows(page, rowsPerPage, posts.length)}
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

const renderEmptyRows = (page, rowsPerPage, postLength) => {
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, postLength - page * rowsPerPage)
  return emptyRows ? (
    <TableRow style={{ height: 53 * emptyRows }}>
      <TableCell colSpan={6} />
    </TableRow>
  ) : null
}
