import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Post from './Post'
import { PostUtils, RouterUtils } from '../../../utils'
import { Comments } from '../../../services/actions'
import { ROUTES } from '../../constants'

class PostPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      post: null,
      comments: null
    }
  }

  getComments (id) {
    this.props.dispatch(Comments.getById(id))
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

  render () {
    const { post } = this.state
    const { comments } = this.props

    if (post === null) this.props.navigate(ROUTES.HOME.path)

    return (
      <Post post={post} comments={comments} />
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
