import React, { Component } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import NotFound from './Components/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
}from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route  path='/about' component={About}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
