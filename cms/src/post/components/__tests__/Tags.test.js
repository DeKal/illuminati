import * as React from 'react'
import { shallow } from 'enzyme'
import Tags from '../Tags'
import { renderSelectedChip } from '../Tags'
const classes = {
  chip: 'chip',
  chips: 'chips',
  formControl: 'formControl'
}
const allTags = ['Algorithm', 'Spring MVC']

describe('Tags', () => {
  it('should render Tags correctly', function() {
    const wrap = shallow(<Tags classes={classes} allTags={allTags} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render tag chips correctly', function() {
    const wrap = shallow(renderSelectedChip(classes, allTags))
    expect(wrap).toMatchSnapshot()
  })
})
