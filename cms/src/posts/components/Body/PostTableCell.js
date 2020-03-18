import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

const PostTableCell = withStyles(theme => ({
  root: {
    width: '50%',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    '&:hover': {
      color: theme.colors.primary
    }
  }
}))(TableCell)

export default PostTableCell
