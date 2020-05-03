import * as React from 'react'
import { mountWithTheme } from 'core/utils/test-helper'
import Toast from '../Toast'

const classes = {
  anchorOriginTopCenter: 'anchorOriginTopCenter'
}

describe('Toast', () => {
  it('should render with success state', function() {
    const wrap = mountWithTheme(
      <Toast classes={classes} isDisplayToast success message="OK" />
    )
    expect(wrap).toMatchSnapshot()
  })

  it('should render with error state', function() {
    const wrap = mountWithTheme(
      <Toast classes={classes} isDisplayToast message="error" />
    )
    expect(wrap).toMatchSnapshot()
  })
})
