import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

const StyleTableCell = withStyles(theme => ({
  root: {
    width: '50%',
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.primary
    }
  }
}))(TableCell)

export default StyleTableCell
