import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from 'error/components/base/Header'
import Title from 'error/components/base/Title'
import Description from 'error/components/base/Description'
import Button from 'error/components/base/Button'

const Layout = ({ title, description, detail }) => {
  return (
    <Fragment>
      <Header>Oops!</Header>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {detail && (
        <Description style={{ color: 'red' }}>Error: {detail}</Description>
      )}
      <a href="/cms">
        <Button> Go To Homepage </Button>
      </a>
    </Fragment>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  detail: PropTypes.string
}

export default Layout
