import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Editor } from '@tinymce/tinymce-react'

const MyEditor = ({ text }) => {
  const editorRef = useRef()

  function onClickHandler () {
    const text = editorRef.current.getContent()
    return text
  }
  return (
    <div>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={text}
      />
      <button type="button" onClick={onClickHandler}>
        Получить
      </button>
    </div>
  )
}

MyEditor.propTypes = {
  text: PropTypes.string
}

export default MyEditor
