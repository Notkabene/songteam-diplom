import PropTypes from 'prop-types'
import React from 'react'
import MyEditor from '../../pages/myEditor'

const PopupEditor = ({ text }) => {
  return <div className=''>
      <MyEditor text={text}/>
    </div>
}

PopupEditor.propTypes = {
  text: PropTypes.string
}

export default PopupEditor
