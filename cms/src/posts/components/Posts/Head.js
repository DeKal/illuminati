import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { HEAD_CELLS } from 'core/const/posts'

const EnhancedTableHead = ({
  order,
  orderColumn,
  numSelected,
  rowCount,
  setOrder,
  setOrderColumn,
  selectAllPosts,
  clearSelected
}) => {
  const createSortHandler = property => () => {
    const isAsc = orderColumn === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderColumn(property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={event =>
              event.target.checked ? selectAllPosts() : clearSelected()
            }
            inputProps={{ 'aria-label': 'select all posts' }}
          />
        </TableCell>
        {HEAD_CELLS.map(headCell => {
          const isOrderColumn = orderColumn === headCell.id
          return (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={isOrderColumn ? order : false}
            >
              <TableSortLabel
                active={isOrderColumn}
                direction={isOrderColumn ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {isOrderColumn ? (
                  <VisuallyHiddenSpan>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </VisuallyHiddenSpan>
                ) : null}
              </TableSortLabel>
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderColumn: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  setOrder: PropTypes.func,
  setOrderColumn: PropTypes.func,
  selectAllPosts: PropTypes.func,
  clearSelected: PropTypes.func
}

export default EnhancedTableHead

const VisuallyHiddenSpan = styled('span')({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  top: 20,
  width: 1
})
