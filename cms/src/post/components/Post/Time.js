import React from 'react'
import PropTypes from 'prop-types'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import DatePicker from 'post/components/DatePicker'

const Time = ({ isEdited, time, editPostTime }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        disableToolbar
        format="dd/MM/yyyy"
        label="Time"
        required
        variant="inline"
        margin="normal"
        fullWidth
        error={isEdited}
        value={time}
        onChange={editPostTime}
        KeyboardButtonProps={{
          'aria-label': 'change date'
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

export default Time

Time.propTypes = {
  isEdited: PropTypes.bool,
  time: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(Date)]),
  editPostTime: PropTypes.func
}
