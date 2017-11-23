import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import {
  Link
} from 'react-router-dom'


export default class Home extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>HELLO BRO YOU ARE AT HOMEEEE</h1>
        </header>
        <p className="App-intro">
          <Link to='/about'>GO about</Link>
        </p>
      </div>
    )
  }
}
