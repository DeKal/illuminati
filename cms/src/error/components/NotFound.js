import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'error/components/base/Layout'

const NotFound = ({ message }) => {
  return (
    <Layout
      title={'An error 404 occurred'}
      description={
        'The page you are looking for might have been removed had its name changed or is temporarily unavailable.'
      }
      detail={message}
    />
  )
}

export default NotFound

NotFound.propTypes = {
  message: PropTypes.string
}
