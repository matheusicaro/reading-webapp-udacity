import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Post } from '../../../services/actions'
import Home from './Home.component'
import { POSTS } from '../../uteis/constants/actions'

class HomeScene extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: null
    }
  }

  initialDate () {
    this.props.dispatch(Post.initialData)
  }

  componentDidMount () {
    if (this.state.posts === null) this.initialDate()
  }

  handleClick = (action, postId) => {
    // TODO: Usar o loadsh para navergar nos objetos e filtrar o ID que tenho que acrescentar ou decrementar o SCORE
    // dos buttons

    // if (action === POSTS.CHANGE_VOTE.UP_VOTE) {
    //   const post = this.state.posts.filter(post => post.id === postId)
    //   this.setState()
    // }
    // if (action === POSTS.CHANGE_VOTE.DOWN_VOTE) {
    //   console.log(this.state)
    //   // this.props.dispatch(Post.changeDownVote)
    // }
  }

  render () {
    // eslint-disable-next-line
    this.state.posts = this.props.posts
    const { posts } = this.state

    return <Home posts={posts} onclick={this.handleClick} />
  }
}

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScene)
