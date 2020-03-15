import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Checkbox from '@material-ui/core/Checkbox'

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
            onChange={event => {
              if (event.target.checked) {
                selectAllPosts()
                return
              }
              clearSelected()
            }}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderColumn === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderColumn === headCell.id}
              direction={orderColumn === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderColumn === headCell.id ? (
                <VisuallyHiddenSpan>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </VisuallyHiddenSpan>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
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

const headCells = [
  {
    id: 'title',
    numeric: false,
    disablePadding: true,
    label: 'Title'
  },
  { id: 'author', numeric: false, disablePadding: false, label: 'Author' },
  { id: 'tag', numeric: false, disablePadding: false, label: 'Tags' },
  { id: 'commentNum', numeric: true, disablePadding: false, label: 'Comments' },
  { id: 'date', numeric: false, disablePadding: false, label: 'Date' }
]

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
