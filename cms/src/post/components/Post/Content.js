import React from 'react'
import PropTypes from 'prop-types'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const Content = ({ content, editPostContent }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={content}
      onChange={(_, editor) => {
        const data = editor.getData()
        editPostContent(data)
      }}
    />
  )
}

export default Content

Content.propTypes = {
  isEdited: PropTypes.bool,
  content: PropTypes.string,
  editPostContent: PropTypes.func
}
