import drawerReducer from '../reducers'

describe('drawer reducers', () => {
  it('should return state with open drawer', function() {
    const initState = {
      open: false
    }
    const action = {
      type: 'drawer/openDrawer'
    }
    expect(drawerReducer(initState, action)).toEqual({
      open: true
    })
  })

  it('should return state with close drawer', function() {
    const initState = {
      open: true
    }
    const action = {
      type: 'drawer/closeDrawer'
    }
    expect(drawerReducer(initState, action)).toEqual({
      open: false
    })
  })

  it('should return state with unknown action type', function() {
    const initState = {
      open: false
    }
    const action = {
      type: ''
    }
    expect(drawerReducer(initState, action)).toEqual({
      open: false
    })
  })

  it('should throw error when calling reducer with nothing', function() {
    expect(() => {
      drawerReducer()
    }).toThrow(TypeError)
  })
})
