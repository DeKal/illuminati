import React from 'react'
import PropTypes from 'prop-types'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import { stableSort, getComparator } from 'core/utils/sort'
import { stringtifyTags } from 'core/utils/misc'

const Body = ({
  posts,
  page,
  rowsPerPage,
  order,
  selectedPosts,
  orderColumn,
  setSelectedPost
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
            onClick={() => setSelectedPost(row.slug)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.slug}
            selected={isItemSelected}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={isItemSelected}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </TableCell>
            <TableCell
              component="th"
              id={labelId}
              scope="row"
              padding="none"
              style={{ width: '50%' }}
            >
              {row.title}
            </TableCell>
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
  setSelectedPost: PropTypes.func
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
