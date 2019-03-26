import React, { Component } from 'react'
import Photo from './../components/Photo'
import { Route, NavLink } from "react-router-dom";

class Feed extends Component {
  loadMore = () => {
    this.props.onLoadMore()
  }

  render() {
    const {
      list,
      visible,
    } = this.props

    return (
      <main>
        <div className="nes-container with-title is-centered is-rounded">
          <h1 className="title">The IDdog</h1>
          <nav className="nav">
            <ul>
              <li>
                <NavLink to={{
                  pathname: "/feed/husky",
                  state: { category: 'husky' }
                }}>
                  Husky
                </NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: "/feed/labrador",
                  state: { category: 'labrador' }
                }}>
                  Labrador
                </NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: "/feed/hound",
                  state: { category: 'hound' }
                }}>
                  Hound
                </NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: "/feed/pug",
                  state: { category: 'pug' }
                }}>
                  Pug
                </NavLink>
              </li>
            </ul>
          </nav>
          <Route path="/feed/:id" render={() => (
            <div>
              <section className="feed">
              {list &&
                list.slice(0, visible).map((item, index) => (
                  <Photo imgUrl={item} alt="Dog" key={index} />
                ))
              }
              </section>
              {visible < list.length &&
                <button
                  className="nes-btn is-primary"
                  onClick={this.loadMore}
                  type="button"
                >
                  Load more
                </button>
              }
            </div>
            )}/>
        </div>
      </main>
    )
  }
}

export default Feed
