import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Post } from '../../../services/actions'
import Home from './Home'
import { POST } from '../../constants/actions'
import { updatePostsInState, deletePostInState } from '../../uteis'

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
    if (
      action === POST.CHANGE_VOTE.upVote ||
      action === POST.CHANGE_VOTE.downVote
    ) {
      // Deverá atualizar o state do componente a depois o dispatch para alterar na API.
      // Se ocorrer Error no dispatch, o state é atualizado para o estado anterior através da Store.
      let { posts } = this.state
      posts = updatePostsInState(posts, action, postId)
      this.setState({ ...this.state, posts })
      this.props.dispatch(Post.updateScore(action, postId))
      //
    } else if (action === POST.DELETE) {
      // const newPosts = deletePostInState(this.state.post, postId)
      // this.setState({ ...this.state, posts: newPosts })
      this.props.dispatch(Post.delete(postId), this.state.posts)
    } else if (action === POST.EDIT) console.log(action, postId)
  };

  render () {
    // eslint-disable-next-line
    this.state.posts = this.props.posts;
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
