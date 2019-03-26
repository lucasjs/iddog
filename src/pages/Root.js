import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import HomePage from './Home'
import NoMatch from './NoMatch'
import FeedPage from './Feed'

class Root extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      loggedIn: false,
      token: ''
    }
  }

  getToken = (email, loggedIn, token) => {
    this.setState({
      email: email,
      loggedIn: loggedIn,
      token: token
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => (
          this.state.loggedIn ? (
            <Redirect to="/feed" />
          ) : (
            <HomePage {...props} onLogin={this.getToken} />
          )
        )} />
        <Route path="/feed" render={(props) => (
          this.state.loggedIn ? (
          <FeedPage {...props} token={this.state.token} />
          ) : (
            <Redirect to="/" />
          )
        )} />
        <Route component={NoMatch} />
      </Switch>
    )
  }
}

export default Root
