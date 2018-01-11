import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RadioGroup extends Component {
  getChildContext() {
    return { name: this.props.name }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

RadioGroup.childContextTypes = {
  name: PropTypes.string,
}

export default RadioGroup
