import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import RadioGroup from './RadioGroup'
import RadioOption from './RadioOption'

class App extends Component {
  render() {
    return (
      <RadioGroup name="blizzard-games">
        <div>
          <RadioOption label="Warcraft 2" value="wc2" />
          <RadioOption label="Warcraft 3" value="wc3" />
          <RadioOption label="Starcraft 1" value="sc1" />
          <RadioOption label="Starcraft 2" value="sc2" />
        </div>
      </RadioGroup>
    )
  }
}

export default App
