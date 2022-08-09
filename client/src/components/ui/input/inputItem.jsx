import React from 'react'
import PropTypes from 'prop-types'
import './input.css'

const InputItem = ({ name, classes, onChange, type }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  const getClasses = () => {
    return `input ${classes}`
  }
  return <input type={type} name={name} className={getClasses()} onChange={handleChange}></input>
}

InputItem.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  classes: PropTypes.string
}

export default InputItem
