import React, { Component } from 'react'
import axios from 'axios'
import Feed from './../containers/Feed'
import api from './../api'

class FeedPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      category: '',
      currentList: [],
      list: {},
      visible: 6
    }
  }

  getPhotos() {
    axios.get(`${api}/feed`, {
      headers: {
        'Authorization': this.props.token
      },
      params: {
        category: this.props.location.state.category
      },
    })
      .then(res => {
        this.setState({list: {
          ...this.state.list, [res.data.category]: {
            category: res.data.category,
            list: res.data.list
          }
        }})
        this.setState({currentList: this.state.list[this.state.category].list})
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({category: this.props.location.state.category}, () => {
        this.getPhotos()
      })
    }
  }

  loadMore = () => {
    this.setState((prev) => {
      return {visible: prev.visible + 3};
    });
  }

  render() {
    return <Feed
      category={this.state.category}
      list={this.state.currentList}
      visible={this.state.visible}
      onLoadMore={this.loadMore}
    />
  }
}

export default FeedPage
