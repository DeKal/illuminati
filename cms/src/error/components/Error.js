import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/core/styles'

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
      return <General message={error.toString()} />
  }
}

Error.propTypes = {
  error: PropTypes.object
}

export default Error

const Container = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '50%',
  textAlign: 'center',
  transform: 'translateY(-50%)',
  backgroundColor: theme.colors.primaryBg
}))

const Content = styled('div')({
  maxWidth: '90%',
  position: 'relative',
  float: 'left',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
})
