import React, { Component } from 'react'

class RadioGroup extends Component {
  renderChildren = () => {
    const { children, name } = this.props

    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        name
      })
    })
  }

  render() {
    return <div class="radio-group">{this.renderChildren()}</div>
  }
}

export default RadioGroup
