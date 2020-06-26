import React from 'react'
import PropTypes from 'prop-types'

import Container from './base/ErrorContainer'
import Content from './base/ErrorContent'

import NotFound from 'error/components/NotFound'
import InternalServer from 'error/components/InternalServer'
import General from 'error/components/General'

const Error = ({ error }) => {
  return (
    <Container>
      <Content>{renderError(error)}</Content>
    </Container>
  )
}

const renderError = error => {
  const { code, message } = error
  switch (code) {
    case 404:
      return <NotFound message={message} />
    case 500:
      return <InternalServer message={message} />
    default:
    case undefined:
      console.error(error)
      return <General message={error.toString()} />
  }
}

Error.propTypes = {
  error: PropTypes.object
}

export default Error
