import React, { Component } from 'react'

class RadioOption extends Component {
  render() {
    return (
      <label>
        <input type="radio" value={this.props.value} name={this.props.name} />
        {this.props.label}
      </label>
    )
  }
}
export default RadioOption
