import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }
  }

  changeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.props.onLogin(this.state.email)
  }

  render() {
    return (
      <main>
        <div className="nes-container with-title is-centered is-rounded">
          <h1 className="title">The IDdog</h1>
            <form onSubmit={this.handleLogin}>
              <div className="nes-field">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="nes-input"
                  value={this.state.email}
                  onChange={this.changeEmail} 
                />
              </div>
              <button type="submit" className="nes-btn is-primary">Login</button>
            </form>
        </div>
      </main>
    )
  }
}

export default Home
