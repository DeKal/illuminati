import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'error/components/base/Layout'

const General = ({ message }) => {
  return (
    <Layout
      title={'An error occurred'}
      description={
        'There are some errors happened during the process, please back to home page and try again.'
      }
      detail={message}
    />
  )
}

export default General

General.propTypes = {
  message: PropTypes.string
}
