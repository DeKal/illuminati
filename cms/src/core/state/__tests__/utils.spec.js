import { toSuccess, toError, toRequest } from '../utils'

describe('state utils test', () => {
  describe('toSuccess', () => {
    it('should return data', function() {
      expect(toSuccess('test')).toBe('testSuccess')
    })
  })

  describe('toError', () => {
    it('should return data', function() {
      expect(toError('test')).toBe('testError')
    })
  })

  describe('toRequest', () => {
    it('should return data', function() {
      expect(toRequest('test')).toBe('testRequest')
    })
  })
})
