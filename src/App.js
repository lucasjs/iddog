import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import Root from './pages/Root'
import 'nes.css/css/nes.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Root />
      </Router>
    )
  }
}

export default App
