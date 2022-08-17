import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ title, type, classes, disabled = false }) => {
  const getClasses = () => {
    return `btn ${classes}`
  }
  return <button className={getClasses()} type={type} disabled={disabled}>
    {title}
    </button>
}

Button.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string
}

export default Button
