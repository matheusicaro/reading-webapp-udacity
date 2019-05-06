import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Post } from '../../../services/actions'
import Home from './Home.component'
import { POSTS } from '../../uteis/constants/actions'
import { updateScorePost } from '../../uteis'

class HomeScene extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: null,
      menuDotsIsOpen: false
    }
  }

  initialDate () {
    this.props.dispatch(Post.initialData)
  }

  componentDidMount () {
    if (this.state.posts === null) this.initialDate()
  }

  handleClick = (action, postId) => {
    if (action === POSTS.CHANGE_VOTE.upVote || action === POSTS.CHANGE_VOTE.downVote) {
      // Deverá atualizar o state do componente a depois o dispatch para alterar na API.
      // Se ocorrer Error no dispatch, o state é atualizado para o estado anterior através da Store.
      let { posts } = this.state
      posts = updateScorePost(posts, action, postId)
      this.setState({ ...this.state, posts })
      this.props.dispatch(Post.updatePostScore(action, postId))
      //
    }
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
