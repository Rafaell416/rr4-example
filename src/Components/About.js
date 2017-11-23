import React, { Component } from 'react'
import '../App.css'
import {
  Link
} from 'react-router-dom'

export default class About extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NOW YOU ARE AT ABOUT</h1>
          <p><Link to='/'>GO HOME</Link></p>
        </header>
      </div>
    )
  }
}
