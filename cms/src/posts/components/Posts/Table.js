import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'

const CustomTable = withStyles(theme => ({
  root: {
    minWidth: theme.postsTableWidth
  }
}))(Table)

export default CustomTable
