import React, { Component } from 'react'

class Photo extends Component {
  constructor(props){
    super(props)

    this.state = {
      clicked : false
    }
  }
  
  openModal = () => {
    document.body.classList.add("no-scroll")
    this.setState({
      clicked: true
    })
  }

  closeModal = () => {
    document.body.classList.remove("no-scroll")
    this.setState({
      clicked: false
    })
  }

  render() {
    const {
      alt,
      imgUrl
    } = this.props

    return (
      <div className="photo">
        <img className="photo--img" src={imgUrl} alt={alt} onClick={this.openModal} />
        {this.state.clicked &&
          <div className="photo--modal-overlay" onClick={this.closeModal}>
            <div className="nes-dialog is-rounded photo--modal">
              <img className="photo--modal-img" src={imgUrl} alt={alt} />
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Photo
