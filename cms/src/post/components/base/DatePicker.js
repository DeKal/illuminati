import { styled } from '@material-ui/core/styles'
import { KeyboardDatePicker } from '@material-ui/pickers'

const DatePicker = styled(KeyboardDatePicker)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: 0,
  '& .MuiInputLabel': {
    '&-formControl': {
      padding: theme.spacing(1),
      transform: 'translate(0, 1.5px) scale(0.75)'
    }
  },
  '& .MuiInput': {
    '&-underline:after': {
      borderBottom: `2px solid ${theme.colors.primary}`
    }
  }
}))

export default DatePicker
