import React from 'react'
import PropTypes from 'prop-types'
import './inputText.css'

const InputText = ({ name }) => {
  return <input type="text" name={name} className="input-text" />
}

InputText.propTypes = {
  name: PropTypes.string
}

export default InputText
