import React from 'react'
import PropTypes from 'prop-types'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import { stableSort, getComparator } from 'core/utils/sort'

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
        const isItemSelected = selectedPosts.indexOf(row.name) !== -1
        const labelId = `enhanced-table-checkbox-${index}`

        return (
          <TableRow
            hover
            onClick={() => setSelectedPost(row.name)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.name}
            selected={isItemSelected}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={isItemSelected}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </TableCell>
            <TableCell component="th" id={labelId} scope="row" padding="none">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
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
