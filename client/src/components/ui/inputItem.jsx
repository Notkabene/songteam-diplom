import React from 'react'
import PropTypes from 'prop-types'

const InputItem = ({ name, classes, onChange, type, value, defaultValue, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  const getClasses = () => {
    return `input ${classes}`
  }
  return (
    <>
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        name={name}
        className={getClasses()}
        onChange={handleChange}
      ></input>
      {error && <div className="invalid-feedback ">{error}</div>}
    </>
  )
}

InputItem.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  classes: PropTypes.string
}

export default InputItem
