import {
  APP_TURN_ON_LOADING,
  APP_TURN_OFF_LOADING,
  OPEN_TOAST,
  CLOSE_TOAST,
  ERROR
} from 'core/state/actionType'

import appReducers from '../reducers'

describe('App Reducer', () => {
  describe('default', () => {
    it('should work corectly', function() {
      const action = {
        type: 'default'
      }
      expect(appReducers({}, action)).toMatchSnapshot()
    })
  })

  describe('APP_TURN_ON_LOADING', () => {
    it('should work corectly', function() {
      const action = {
        type: APP_TURN_ON_LOADING
      }
      expect(appReducers({}, action)).toMatchSnapshot()
    })
  })

  describe('APP_TURN_OFF_LOADING', () => {
    it('should work corectly', function() {
      const action = {
        type: APP_TURN_OFF_LOADING
      }
      expect(appReducers({}, action)).toMatchSnapshot()
    })
  })

  describe('OPEN_TOAST', () => {
    it('should work corectly', function() {
      const action = {
        type: OPEN_TOAST,
        payload: {
          success: true,
          msg: 'successfully save user'
        }
      }
      expect(appReducers({}, action)).toMatchSnapshot()
    })
  })

  describe('CLOSE_TOAST', () => {
    it('should work corectly', function() {
      const action = {
        type: CLOSE_TOAST
      }
      expect(appReducers({}, action)).toMatchSnapshot()
    })
  })

  describe('ERROR', () => {
    it('should work corectly', function() {
      const action = {
        type: ERROR,
        payload: 'Some thing wrong happened'
      }
      expect(appReducers({}, action)).toMatchSnapshot()
    })
  })
})
