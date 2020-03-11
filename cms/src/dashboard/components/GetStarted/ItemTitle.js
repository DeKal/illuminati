import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const ItemTitle = withStyles(theme => ({
  root: {
    fontSize: theme.fontSizes.XL,
    fontWeight: 600
  }
}))(Typography)

export default ItemTitle
