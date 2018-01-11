import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RadioOption extends Component {
  render() {
    const { value, label } = this.props
    const { name } = this.context

    return (
      <label>
        <input type="radio" value={value} name={name} />
        {label}
      </label>
    )
  }
}

RadioOption.contextTypes = {
  name: PropTypes.string,
}

export default RadioOption
