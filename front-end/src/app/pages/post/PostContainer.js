import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Post from './Post'
import { PostUtils, RouterUtils } from '../../../utils'
import { Post as PostAction, Comments } from '../../../services/actions'
import { ROUTES } from '../../constants'
import { CARD_BUTTON as POST_OR_COMMENT } from '../../constants/actions'

class PostPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      post: null,
      comments: null
    }
  }

  getComments (postId) {
    this.props.dispatch(Comments.getById(postId))
  }

  componentWillMount () {
    if (this.props.posts) {
      const { id } = this.props.match.params
      const post = PostUtils.getPostId(this.props.posts, id)
      this.setState({ post })
    }
  }

  componentDidMount () {
    if (this.state.post !== null || this.state.comments !== null) { this.getComments(this.state.post.id) }
  }

  onClicksPost = (action, postId, data) => {
    if (
      action === POST_OR_COMMENT.CHANGE_VOTE.upVote ||
      action === POST_OR_COMMENT.CHANGE_VOTE.downVote
    ) {
      this.props.dispatch(PostAction.updateScore(action, postId))
      this.setState(PostUtils.updateState(action, this.state.post))
    } else if (action === POST_OR_COMMENT.DELETE) {
      this.props.dispatch(PostAction.delete(postId))
      this.navigateToHome()
    } else if (action === POST_OR_COMMENT.EDIT) {
      this.props.dispatch(PostAction.edit(postId, data))
      this.setState(PostUtils.updateState(action, this.state.post, data))
    } else if (action === ROUTES.NAVIGATE) window.alert('RETIRAR AÇÃO DESTE BUTTON NESTA PAGINA')
  };

  onClicksComment = (action, commentId, data) => {
    console.log()
    if (
      action === POST_OR_COMMENT.CHANGE_VOTE.upVote ||
      action === POST_OR_COMMENT.CHANGE_VOTE.downVote
    ) this.props.dispatch(Comments.updateScore(action, commentId))

    else if (action === POST_OR_COMMENT.DELETE) this.props.dispatch(Comments.delete(commentId))
    else if (action === POST_OR_COMMENT.EDIT) this.props.dispatch(Post.edit(commentId, data))
    else if (action === ROUTES.NAVIGATE) this.props.navigate(`${ROUTES.POST.path}/${commentId}`)
  };

  navigateToHome () {
    this.props.navigate(ROUTES.HOME.path)
  }

  render () {
    const { post } = this.state
    const { comments } = this.props

    if (post === null) this.navigateToHome()
    return (
      <Post
        post={post}
        onClicksPost={this.onClicksPost}
        onClicksComment={this.onClicksComment}
        comments={comments}
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
