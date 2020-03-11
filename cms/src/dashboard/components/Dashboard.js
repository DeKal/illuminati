import React from 'react'
import PropTypes from 'prop-types'
import GetStarted from 'dashboard/components/GetStarted'

const DashBoard = ({ history }) => (
  <div>
    <GetStarted history={history} />
  </div>
)

export default DashBoard

DashBoard.propTypes = {
  history: PropTypes.object.isRequired
}
