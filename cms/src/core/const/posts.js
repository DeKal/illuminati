export const DEFAULT_LINE_HEIGHT = 53

export const HEAD_CELLS = [
  {
    id: 'title',
    numeric: false,
    disablePadding: true,
    label: 'Title'
  },
  { id: 'author', numeric: false, disablePadding: false, label: 'Author' },
  { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
  { id: 'tag', numeric: false, disablePadding: false, label: 'Tags' },
  { id: 'commentNum', numeric: true, disablePadding: false, label: 'Comments' }
]

export const POSTS_PER_PAGE = [5, 10, 25, 50]
