import React from 'react'
import PropTypes from 'prop-types'
import TablePagination from '@material-ui/core/TablePagination'
import { calcMaxRowsPerPage } from 'core/utils/misc'

const Pagination = ({
  postCount,
  rowsPerPage,
  page,
  changePage,
  changeRowsPerPage
}) => (
  <TablePagination
    rowsPerPageOptions={calcMaxRowsPerPage(postCount)}
    component="div"
    count={postCount}
    rowsPerPage={rowsPerPage}
    page={page}
    onChangePage={(_, newPage) => changePage(newPage)}
    onChangeRowsPerPage={event =>
      changeRowsPerPage(parseInt(event.target.value, 10))
    }
  />
)

Pagination.propTypes = {
  postCount: PropTypes.number,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  changePage: PropTypes.func,
  changeRowsPerPage: PropTypes.func
}

export default Pagination
