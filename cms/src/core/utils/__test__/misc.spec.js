import { isPathMatchUrl } from '../misc'

describe('Misc', () => {
  it('should match URL correctly with no error', function() {
    expect(isPathMatchUrl('/', '/')).toBe(true)
    expect(isPathMatchUrl('/user', '/')).toBe(false)
    expect(isPathMatchUrl('/', '/user')).toBe(false)
    expect(isPathMatchUrl('/user', '/profile')).toBe(false)
    expect(isPathMatchUrl('/settings/theme', '/settings')).toBe(true)
  })
})
