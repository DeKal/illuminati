import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const StylePaper = withStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(2)
  }
}))(Paper)

export default StylePaper
