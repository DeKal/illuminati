import postsReducer from '../reducers'
import {
  CHANGE_PAGE,
  CHANGE_ROW_PER_PAGE,
  SET_ORDER,
  SET_ORDER_COLUMN,
  SET_SELECTED_POST,
  SELECT_ALL_POSTS,
  CLEAR_SELECTED,
  FETCH_POSTS
} from 'core/state/actionType'
import { toSuccess, toError } from 'core/state/utils'

describe('Posts Reducer ', () => {
  describe('default', () => {
    it('should work corectly', function() {
      const action = {
        type: 'default'
      }
      expect(postsReducer({}, action)).toMatchSnapshot()
      expect(() => {
        postsReducer()
      }).toThrow(TypeError)
    })
  })
  describe('CHANGE_PAGE', () => {
    it('should work corectly', function() {
      const action = {
        type: CHANGE_PAGE,
        payload: 1
      }
      expect(postsReducer({}, action)).toMatchSnapshot()
    })
  })
  describe('CHANGE_ROW_PER_PAGE', () => {
    it('should work corectly', function() {
      const action = {
        type: CHANGE_ROW_PER_PAGE,
        payload: 10
      }
      expect(postsReducer({}, action)).toMatchSnapshot()
    })
  })
  describe('SET_ORDER', () => {
    it('should work corectly', function() {
      const action = {
        type: SET_ORDER,
        payload: 'asc'
      }
      expect(postsReducer({}, action)).toMatchSnapshot()
    })
  })
  describe('SET_ORDER_COLUMN', () => {
    it('should work corectly', function() {
      const action = {
        type: SET_ORDER_COLUMN,
        payload: 'author'
      }
      expect(postsReducer({}, action)).toMatchSnapshot()
    })
  })

  describe('SELECT_ALL_POSTS', () => {
    it('should work corectly', function() {
      const posts = [{ slug: 'a' }, { slug: 'b' }]
      const action = {
        type: SELECT_ALL_POSTS
      }
      expect(postsReducer({ posts }, action)).toMatchSnapshot()
    })
  })

  describe('CLEAR_SELECTED', () => {
    it('should work corectly', function() {
      const action = {
        type: CLEAR_SELECTED
      }
      const selectedPosts = [{ slug: 'a' }, { slug: 'b' }]
      expect(postsReducer({ selectedPosts }, action)).toMatchSnapshot()
    })
  })

  describe('FETCH_POSTS', () => {
    it('success', function() {
      const action = {
        type: toSuccess(FETCH_POSTS),
        payload: 'success payload'
      }
      expect(postsReducer({}, action)).toMatchSnapshot()
    })

    it('error', function() {
      const action = {
        type: toError(FETCH_POSTS),
        payload: 'faild payload'
      }
      expect(postsReducer({}, action)).toMatchSnapshot()
    })
  })

  describe('SET_SELECTED_POST', () => {
    it('add new selected post', function() {
      const selectedPosts = ['a', 'b', 'c', 'd']
      const action = {
        type: SET_SELECTED_POST,
        payload: 'e'
      }

      expect(postsReducer({ selectedPosts }, action)).toMatchSnapshot()
    })

    it('remove a selected post at the beginning', function() {
      const selectedPosts = ['a', 'b', 'c', 'd']
      const action = {
        type: SET_SELECTED_POST,
        payload: 'a'
      }

      expect(postsReducer({ selectedPosts }, action)).toMatchSnapshot()
    })

    it('remove a selected post at the middle', function() {
      const selectedPosts = ['a', 'b', 'c', 'd']
      const action = {
        type: SET_SELECTED_POST,
        payload: 'b'
      }

      expect(postsReducer({ selectedPosts }, action)).toMatchSnapshot()
    })

    it('remove a selected post at the end', function() {
      const selectedPosts = ['a', 'b', 'c', 'd']
      const action = {
        type: SET_SELECTED_POST,
        payload: 'd'
      }

      expect(postsReducer({ selectedPosts }, action)).toMatchSnapshot()
    })
  })
})
