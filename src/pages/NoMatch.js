import React from 'react'
import DogGif from './../img/dog.gif'
import { Link } from "react-router-dom"

const NoMatch = () => {
  return (
    <main>
      <div className="nes-container with-title is-centered is-dark is-rounded">
        <p className="title">404</p>
        <p>Have you seen him?</p>
        <img src={DogGif} alt="Dog running" />
        <p>Now you have!</p>
      </div>
      <div className="nes-container with-title is-centered is-rounded">
        <Link to="/" className="nes-btn">Back to home</Link>
      </div>
    </main>
  )
}

export default NoMatch
