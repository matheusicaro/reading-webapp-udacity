import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import GeneraId from 'uuid'

import PostDetails from './PostDetails'
import { RouterUtils } from '../../../utils'
import { PostAction, POST_TYPE_ACTION } from '../../../services/actions/post'
import { CommentsAction, COMMENTS_TYPE_ACTION } from '../../../services/actions/comments'

import { ROUTES } from '../../constants'

import PostDetailsUtils from './PostDetailsUtils'

class PostPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      post: null
    }
  }

  getComments (postId) {
    this.props.dispatch(CommentsAction.getById(postId))
  }

  componentWillMount () {
    if (this.props.posts) {
      const { id } = this.props.match.params
      const post = PostDetailsUtils.getPostId(this.props.posts, id)
      this.setState({ post })
    }
  }

  componentDidMount () {
    if (this.state.post !== null) {
      this.getComments(this.state.post.id)
    }
  }

  onClicksInPost = (action, data) => {
    if (
      action === POST_TYPE_ACTION.CHANGE_VOTE.upVote ||
      action === POST_TYPE_ACTION.CHANGE_VOTE.downVote
    ) {
      const postId = data
      this.props.dispatch(PostAction.updateScore(action, postId))
      this.setState(PostDetailsUtils.updateState(action, this.state.post))
    } else if (action === POST_TYPE_ACTION.DELETE) {
      const postId = data
      this.props.dispatch(PostAction.delete(postId))
      this.navigateToHome()
    } else if (action === POST_TYPE_ACTION.EDIT) {
      const { cardId, update } = data
      this.props.dispatch(PostAction.edit(cardId, update))
      this.setState(PostDetailsUtils.updateState(action, this.state.post, update))
    }
  };

  onClicksInComment = (action, data) => {
    if (
      action === COMMENTS_TYPE_ACTION.CHANGE_VOTE.upVote ||
      action === COMMENTS_TYPE_ACTION.CHANGE_VOTE.downVote
    ) {
      const cardId = data
      this.props.dispatch(CommentsAction.updateScore(action, cardId))
    } else if (action === COMMENTS_TYPE_ACTION.DELETE) {
      const cardId = data
      this.props.dispatch(CommentsAction.delete(cardId))
      const newPost = this.state.post
      newPost.commentCount -= 1
      this.setState(newPost)
    } else if (action === COMMENTS_TYPE_ACTION.EDIT) {
      const { cardId, update } = data
      update.timestamp = new Date().getTime()
      this.props.dispatch(CommentsAction.edit(cardId, update))
    }
  };

  onClickSendComment = (action, data) => {
    data.timestamp = new Date().getTime()
    data.id = GeneraId(data.body, data.author)
    data.parentId = this.state.post.id
    this.props.dispatch(CommentsAction.sendComment(data))
  }
  navigateToHome () {
    this.props.navigate(ROUTES.HOME.path)
  }

  render () {
    let { post } = this.state

    if (post === null) this.navigateToHome()

    return (
      <PostDetails
        post={post}
        onClicksPost={this.onClicksInPost}
        onClicksComment={this.onClicksInComment}
        onClickSendComment={this.onClickSendComment}
      />
    )
  }
}

const mapStateToProps = ({ posts, comments }) => ({ posts, comments })

const mapDispatchToProps = dispatch => {
  const navigate = RouterUtils.Router(dispatch)
  return { dispatch, ...navigate }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostPage)
)
