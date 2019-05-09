import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Post } from '../../../services/actions'
import Home from './Home'
import { POST } from '../../constants/actions'

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
    ) this.props.dispatch(Post.updateScore(action, postId))

    else if (action === POST.DELETE) this.props.dispatch(Post.delete(postId), this.state.posts)
    else if (action === POST.EDIT) console.log('ESTOU NO CONTROLLER')
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
