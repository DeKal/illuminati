import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const ItemButton = withStyles(theme => ({
  root: {
    fontSize: theme.fontSizes.M,
    backgroundColor: theme.colors.primary,
    marginTop: theme.spaces.gutter,
    padding: `${theme.spaces.xsmall}px ${theme.spaces.medium}px`,
    textTransform: 'none'
  }
}))(Button)

export default ItemButton
