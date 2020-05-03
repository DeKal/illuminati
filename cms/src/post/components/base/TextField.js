import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const ValidationTextField = withStyles(theme => ({
  root: {
    '& input:valid + fieldset': {
      borderWidth: 2
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2
    },
    '& input:valid:hover + fieldset': {
      borderColor: theme.colors.primary
    },
    '& input:valid:focus + fieldset': {
      borderColor: theme.colors.primary,
      borderLeftWidth: 3,
      padding: '4px !important' // override inline-style
    },
    margin: theme.spacing(1)
  }
}))(TextField)

export default ValidationTextField
