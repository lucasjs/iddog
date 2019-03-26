import React, { Component } from 'react'
import axios from 'axios'
import Home from './../containers/Home'
import api from './../api'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      loggedIn: false,
      token: ''
    }
  }

  login = (email) => {
    this.setState({
      email: email
    })

    axios.post(`${api}/signup`, {
      email: email
    })
      .then(response => {
        this.setState({token: response.data.user.token})
        this.setState({loggedIn: true})
      })
      .then(() => {
        this.props.onLogin(this.state.email, this.state.loggedIn, this.state.token)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return <Home onLogin={this.login} />
  }
}

export default HomePage
