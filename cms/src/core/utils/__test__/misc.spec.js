import { stringtifyTags, calcMaxRowsPerPage, isPathMatchUrl } from '../misc'

describe('Misc ', () => {
  describe('isPathMatchUrl ', () => {
    it('should match URL correctly with no error', function() {
      expect(isPathMatchUrl('/', '/')).toBe(true)
      expect(isPathMatchUrl('/user', '/')).toBe(false)
      expect(isPathMatchUrl('/', '/user')).toBe(false)
      expect(isPathMatchUrl('/user', '/profile')).toBe(false)
      expect(isPathMatchUrl('/settings/theme', '/settings')).toBe(true)
    })
  })
  describe('stringtifyTags ', () => {
    it('should match URL correctly with no error', function() {
      expect(stringtifyTags(['test', 'test2'])).toEqual('test, test2')
      expect(stringtifyTags(['testStringWith', 'Length>20'])).toEqual(
        'testStringWith, Leng...'
      )
      expect(stringtifyTags(['testStringWith', 'Length>20'], 15)).toEqual(
        'testStringWith,...'
      )
    })
  })
  describe('calcMaxRowsPerPage ', () => {
    it('should match URL correctly with no error', function() {
      expect(calcMaxRowsPerPage(5)).toEqual([5, 10])
      expect(calcMaxRowsPerPage(8)).toEqual([5, 10])
      expect(calcMaxRowsPerPage(15)).toEqual([5, 10, 25])
      expect(calcMaxRowsPerPage(90)).toEqual([5, 10, 25, 50])
    })
  })
})
