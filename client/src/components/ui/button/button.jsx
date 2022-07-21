import PropTypes from 'prop-types'
import React from 'react'
import './button.css'

const Button = ({ title, type, classes }) => {
  return <button className={classes} type={type}>
    {title}
    </button>
}

Button.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.string,
  type: PropTypes.string
}

export default Button
