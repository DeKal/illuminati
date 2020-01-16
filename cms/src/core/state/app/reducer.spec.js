import application from 'core/state/app/reducers'
import { ADD_TODO } from 'core/const/actionType'

describe('application reducers', () => {
  it('should return new state when using TODO action', () => {
    const action = {
      type: ADD_TODO,
      text: 'Action'
    }
    const expectedOutput = {
      text: 'Action'
    }
    expect(application({}, action)).toEqual(expectedOutput)
  })

  it('should return init state when invalid action', () => {
    const action = {
      type: 'test',
      text: 'Action'
    }
    const state = {
      text: 'dummy text'
    }
    expect(application(state, action)).toEqual(state)
  })
})
