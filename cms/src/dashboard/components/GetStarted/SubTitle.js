import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const SubTitle = withStyles(theme => ({
  root: {
    fontSize: theme.fonts.L,
    color: theme.colors.secondaryText,
    marginBottom: `${theme.spaces.medium}px`
  }
}))(Typography)

export default SubTitle
