import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import '../App.css'

export default class NotFound extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>:( NOT FOUND</h1>
        </header>
        <p >
          <Link to='/'>GO home</Link>
        </p>
      </div>
    )
  }
}
