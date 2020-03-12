import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Title = withStyles(theme => ({
  root: {
    fontSize: theme.fontSizes.XXL,
    fontWeight: 600,
    padding: '9px 0 4px 0',
    lineHeight: 1.3
  }
}))(Typography)

export default Title
