import React from 'react'
import { shallow, mount } from 'enzyme'
import Theme from 'core/theme/ThemeWrapper'

export const shallowWithTheme = component => {
  const wrapper = shallow(
    <Theme>
      <div data-test-id="theme-wrapper">{component}</div>
    </Theme>
  )
  return wrapper.find('[data-test-id="theme-wrapper"]').shallow()
}

export const mountWithTheme = component => {
  const wrapper = mount(
    <Theme>
      <div data-test-id="theme-wrapper">{component}</div>
    </Theme>
  )
  return wrapper.find('[data-test-id="theme-wrapper"]')
}
