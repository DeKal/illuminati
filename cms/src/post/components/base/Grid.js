import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const PaddingGrid = withStyles(theme => ({
  root: {
    paddingRight: theme.spacing(3)
  }
}))(Grid)

export default PaddingGrid
