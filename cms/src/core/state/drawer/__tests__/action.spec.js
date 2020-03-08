import { openDrawer, closeDrawer } from '../actions'

describe('drawer actions', () => {
  it('should return action with open drawer', function() {
    expect(openDrawer()).toMatchSnapshot()
  })

  it('should return action with close drawer', function() {
    expect(closeDrawer()).toMatchSnapshot()
  })
})
