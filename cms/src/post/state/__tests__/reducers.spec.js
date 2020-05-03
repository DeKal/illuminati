import postReducer from '../reducers'
import {
  FETCH_POST,
  EDIT_POST_TITLE,
  EDIT_POST_SLUG,
  EDIT_POST_BRIEF,
  EDIT_POST_AUTHOR,
  EDIT_POST_TIME,
  EDIT_POST_TAGS,
  EDIT_POST_CONTENT,
  SAVE_EDITED_CONTENT,
  CREATE_NEW_POST,
  INIT_POST
} from 'core/state/actionType'
import { toRequest, toSuccess, toError } from 'core/state/utils'

describe('Post Reducer', () => {
  describe('default', () => {
    it('should work corectly', function() {
      const action = {
        type: 'default'
      }
      expect(postReducer({}, action)).toMatchSnapshot()
      expect(() => {
        postReducer()
      }).toThrow(TypeError)
    })
  })

  describe('FETCH_POST', () => {
    it('toRequest should work corectly', function() {
      const action = {
        type: toRequest(FETCH_POST)
      }
      expect(postReducer({}, action)).toMatchSnapshot()
    })

    it('toSuccess should work corectly', function() {
      const action = {
        type: toSuccess(FETCH_POST),
        payload: {
          id: 'test',
          slug: 'test',
          title: 'test',
          brief: 'test',
          time: 'test',
          tag: ['test', 'test1'],
          author: 'test',
          content: 'test'
        }
      }
      expect(postReducer({}, action)).toMatchSnapshot()
    })

    it('toError should work corectly', function() {
      const action = {
        type: toError(FETCH_POST),
        error: new Error('test')
      }
      expect(() => {
        postReducer({}, action)
      }).toThrow(Error)
    })
  })

  describe('CREATE_NEW_POST', () => {
    it('toSuccess should work corectly', function() {
      const state = {
        editedContent: {
          id: 'test',
          slug: 'test',
          title: 'test',
          brief: 'test',
          time: 'test',
          tag: ['test', 'test1'],
          author: 'test',
          content: 'test'
        }
      }
      const action = {
        type: toSuccess(CREATE_NEW_POST),
        payload: {}
      }
      expect(postReducer(state, action)).toMatchSnapshot()
    })
  })

  describe('SAVE_EDITED_CONTENT', () => {
    it('toSuccess should work corectly', function() {
      const state = {
        editedContent: {
          id: 'test',
          slug: 'test',
          title: 'test',
          brief: 'test',
          time: 'test',
          tag: ['test', 'test1'],
          author: 'test',
          content: 'test'
        }
      }
      const action = {
        type: toSuccess(SAVE_EDITED_CONTENT),
        payload: {}
      }
      expect(postReducer(state, action)).toMatchSnapshot()
    })
  })

  describe('EDIT_POST_TITLE', () => {
    it('should work corectly', function() {
      const action = {
        type: EDIT_POST_TITLE,
        payload: 'edited title'
      }
      expect(postReducer({}, action)).toMatchSnapshot()
    })
  })

  describe('EDIT_POST_SLUG', () => {
    it('should work corectly', function() {
      const action = {
        type: EDIT_POST_SLUG,
        payload: 'edited-slug'
      }
      expect(postReducer({}, action)).toMatchSnapshot()
    })
  })

  describe('EDIT_POST_BRIEF', () => {
    it('should work corectly', function() {
      const action = {
        type: EDIT_POST_BRIEF,
        payload: 'edited brief'
      }
      expect(postReducer({}, action)).toMatchSnapshot()
    })
  })

  describe('EDIT_POST_AUTHOR', () => {
    it('should work corectly', function() {
      const action = {
        type: EDIT_POST_AUTHOR,
        payload: 'edited author'
      }
      expect(postReducer({}, action)).toMatchSnapshot()
    })
  })

  describe('EDIT_POST_TIME', () => {
    it('should work corectly', function() {
      const action = {
        type: EDIT_POST_TIME,
        payload: new Date('04/04/2020')
      }
      expect(postReducer({}, action)).toMatchSnapshot()
    })
  })

  describe('EDIT_POST_TAGS', () => {
    it('should work corectly', function() {
      const action = {
        type: EDIT_POST_TAGS,
        payload: 'edited tag'
      }
      expect(postReducer({}, action)).toMatchSnapshot()
    })
  })

  describe('EDIT_POST_CONTENT', () => {
    it('should work corectly', function() {
      const action = {
        type: EDIT_POST_CONTENT,
        payload: 'edited content'
      }
      expect(postReducer({}, action)).toMatchSnapshot()
    })
  })

  describe('INIT_POST', () => {
    it('should work corectly', function() {
      jest.spyOn(Date, 'now').mockReturnValue(new Date('04/04/2020'))
      const action = {
        type: INIT_POST
      }
      expect(postReducer({}, action)).toMatchSnapshot()
    })
  })
})
