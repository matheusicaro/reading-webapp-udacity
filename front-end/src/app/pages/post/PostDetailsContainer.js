import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import GeneraId from 'uuid'

import PostDetails from './PostDetails'
import { RouterUtils } from '../../../utils'
import { PostAction, POST_TYPE_ACTION } from '../../../services/actions/post'
import { CommentsAction, COMMENTS_TYPE_ACTION } from '../../../services/actions/comments'
import Warnings from '../../components/Warnings'

import PostDetailsUtils from './PostDetailsUtils'
import NotFound from '../notFound/NotFound'

class PostPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      post: null,
      deletePost: false
    }
  }

  getComments (postId) {
    this.props.dispatch(CommentsAction.getById(postId))
  }

  componentWillMount () {
    this.getPost()
  }

  componentDidUpdate () {
    if (!this.state.deletePost && this.state.post === null) {
      this.getPost()
    }
  }

  getPost () {
    if (this.props.posts) {
      const { post_id } = this.props.match.params // eslint-disable-line
      const post = PostDetailsUtils.getPostId(this.props.posts, post_id)
      if (!post) {
        this.setState({ deletePost: true })
      } else {
        this.getComments(post.id)
        this.setState({ post })
      }
    }
  }

  componentDidMount () {
    if (!this.state.deletePost && this.state.post !== null) {
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
      this.setState({ deletePost: true })
    } else if (action === POST_TYPE_ACTION.EDIT) {
      const { title, body } = data
      const updatePost = { ...this.state.post, title, body }
      this.setState({ post: updatePost })
      this.props.dispatch(PostAction.edit(this.state.post.id, data))
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
  initialData () {
    this.props.dispatch(PostAction.initialData)
  }

  render () {
    const { post, deletePost } = this.state
    console.log(deletePost)

    if (deletePost) {
      return <NotFound />
    }

    if (post === null || this.props.posts === null) {
      this.initialData()
      return <Warnings message={'Loading...'} />
    }

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
