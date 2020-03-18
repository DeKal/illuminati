import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { DEFAULT_LINE_HEIGHT } from 'core/const/posts'

const EmptyRows = ({ page, rowsPerPage, postsLength }) => {
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, postsLength - page * rowsPerPage)
  return emptyRows ? (
    <TableRow style={{ height: DEFAULT_LINE_HEIGHT * emptyRows }}>
      <TableCell colSpan={6} />
    </TableRow>
  ) : null
}

export default EmptyRows

EmptyRows.propTypes = {
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  postsLength: PropTypes.number
}
