import * as React from 'react'
import { mount } from 'enzyme'
import Container from '../Container'
import ThemeWrapper from 'core/theme/ThemeWrapper'

describe('PageSwitch Container', () => {
  it('should render Container with no error', function() {
    const wrap = mount(
      <ThemeWrapper>
        <Container />
      </ThemeWrapper>
    )
    expect(wrap.find('Styled(div)')).toMatchSnapshot()
  })
})
