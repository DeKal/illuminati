import { getComparator, stableSort } from '../sort'

describe('Sort ', () => {
  describe('getComparator ', () => {
    describe('desc ', () => {
      it('should compare more than with no error', function() {
        const comparator = getComparator('desc', 'colA')
        const a = {
          colA: 'a'
        }
        const b = {
          colA: 'b'
        }
        expect(comparator(a, b)).toBe(1)
      })

      it('should compare less than with no error', function() {
        const comparator = getComparator('desc', 'colA')
        const a = {
          colA: 'b'
        }
        const b = {
          colA: 'a'
        }
        expect(comparator(a, b)).toBe(-1)
      })

      it('should compare equal with no error', function() {
        const comparator = getComparator('desc', 'colA')
        const a = {
          colA: 'a'
        }
        const b = {
          colA: 'a'
        }
        expect(comparator(a, b)).toBe(0)
      })
    })
    describe('asc ', () => {
      it('should compare more than with no error', function() {
        const comparator = getComparator('asc', 'colA')
        const a = {
          colA: 'a'
        }
        const b = {
          colA: 'b'
        }
        expect(comparator(a, b)).toBe(-1)
      })

      it('should compare less than with no error', function() {
        const comparator = getComparator('asc', 'colA')
        const a = {
          colA: 'b'
        }
        const b = {
          colA: 'a'
        }
        expect(comparator(a, b)).toBe(1)
      })

      it('should compare equal with no error', function() {
        const comparator = getComparator('asc', 'colA')
        const a = {
          colA: 'a'
        }
        const b = {
          colA: 'a'
        }
        expect(comparator(a, b)).toBe(-0)
      })
    })
  })
  describe('stableSort ', () => {
    it('should sort desc by ColA with no error', function() {
      const array = [
        {
          colA: 'c'
        },
        {
          colA: 'b'
        },
        {
          colA: 'a'
        },
        {
          colA: 'a'
        }
      ]
      expect(stableSort(array, getComparator('desc', 'colA'))).toMatchSnapshot()
    })
    it('should sort asc by ColA with no error', function() {
      const array = [
        {
          colA: 'c'
        },
        {
          colA: 'b'
        },
        {
          colA: 'a'
        }
      ]
      expect(stableSort(array, getComparator('asc', 'colA'))).toMatchSnapshot()
    })
  })
})
