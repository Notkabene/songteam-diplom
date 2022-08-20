import React, { useState } from 'react'
import PropTypes from 'prop-types'

const InputItem = ({
  name,
  classes,
  onChange,
  type,
  value,
  defaultValue,
  error
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  const getClasses = () => {
    return `input ${classes}`
  }
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }
  return (
    <>
      <input
        type={showPassword ? 'text' : type}
        value={value}
        defaultValue={defaultValue}
        name={name}
        className={getClasses()}
        onChange={handleChange}
      ></input>
      {error && <div className="invalid-feedback">{error}</div>}
      {type === 'password' && (
        <button
          className="password-icon"
          type="button"
          onClick={toggleShowPassword}
        >
          {showPassword ? <img className="password-icon__img" src="/assets/images/eye.svg" alt="" /> : <img className="password-icon__img" src="/assets/images/eye_visible.svg" alt="" />}
        </button>
      )}
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
