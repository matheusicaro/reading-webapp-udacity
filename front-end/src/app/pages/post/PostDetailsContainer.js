import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import GeneraId from 'uuid'

import PostDetails from './PostDetails'
import { RouterUtils } from '../../../utils'
import { Post as PostAction, Comments } from '../../../services/actions'
import { ROUTES } from '../../constants'

import PostDetailsUtils from './PostDetailsUtils'
import { CARD_BUTTON as ACTION_OF_POST_OR_COMMENT } from '../../constants/actions'

class PostPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      post: null
    }
  }

  getComments (postId) {
    this.props.dispatch(Comments.getById(postId))
  }

  componentWillMount () {
    if (this.props.posts) {
      const { id } = this.props.match.params
      const post = PostDetailsUtils.getPostId(this.props.posts, id)
      this.setState({ post })
    }
  }

  componentDidMount () {
    if (this.state.post !== null) { this.getComments(this.state.post.id) }
  }

  onClicksPost = (action, postId, data) => {
    if (
      action === ACTION_OF_POST_OR_COMMENT.CHANGE_VOTE.upVote ||
      action === ACTION_OF_POST_OR_COMMENT.CHANGE_VOTE.downVote
    ) {
      this.props.dispatch(PostAction.updateScore(action, postId))
      this.setState(PostDetailsUtils.updateState(action, this.state.post))
    } else if (action === ACTION_OF_POST_OR_COMMENT.DELETE) {
      this.props.dispatch(PostAction.delete(postId))
      this.navigateToHome()
    } else if (action === ACTION_OF_POST_OR_COMMENT.EDIT) {
      this.props.dispatch(PostAction.edit(postId, data))
      this.setState(PostDetailsUtils.updateState(action, this.state.post, data))
    }
  };

  onClicksComment = (action, commentId, data) => {
    if (
      action === ACTION_OF_POST_OR_COMMENT.CHANGE_VOTE.upVote ||
      action === ACTION_OF_POST_OR_COMMENT.CHANGE_VOTE.downVote
    ) this.props.dispatch(Comments.updateScore(action, commentId))

    else if (action === ACTION_OF_POST_OR_COMMENT.DELETE) {
      this.props.dispatch(Comments.delete(commentId))
      const newPost = this.state.post
      newPost.commentCount -= 1
      this.setState(newPost)
    } else if (action === ACTION_OF_POST_OR_COMMENT.EDIT) {
      data.timestamp = new Date().getTime()
      this.props.dispatch(Comments.edit(commentId, data))
    } else if (action === ROUTES.NAVIGATE) this.props.navigate(`${ROUTES.POST.path}/${commentId}`)
  };

  onClickSendComment = (action, data) => {
    data.timestamp = new Date().getTime()
    data.id = GeneraId(data.body, data.author)
    data.parentId = this.state.post.id
    this.props.dispatch(Comments.sendComment(data))
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
        onClicksPost={this.onClicksPost}
        onClicksComment={this.onClicksComment}
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
