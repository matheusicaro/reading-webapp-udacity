import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { PostAction, POST_TYPE_ACTION } from '../../../services/actions/post'
import { ROUTES } from '../../constants'

import { RouterUtils } from '../../../utils'

import Home from './Home'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      aplicatedFilter: false
    }
  }

  initialDate () {
    this.props.dispatch(PostAction.initialData)
  }

  componentDidMount () {
    if (this.props.posts === null) this.initialDate()
  }

  onClicks = (action, data) => {
    console.log(action)
    if (
      action === POST_TYPE_ACTION.CHANGE_VOTE.upVote ||
      action === POST_TYPE_ACTION.CHANGE_VOTE.downVote
    ) {
      const postId = data
      this.props.dispatch(PostAction.updateScore(action, postId))
    } else if (action === POST_TYPE_ACTION.DELETE) {
      const postId = data
      this.props.dispatch(PostAction.delete(postId))
    } else if (action === POST_TYPE_ACTION.EDIT) {
      this.props.dispatch(PostAction.edit(data.cardId, data.update))
    } else if (action === POST_TYPE_ACTION.NAVIGATE) {
      const postId = data
      const path = ROUTES.returnPathToPostId(postId)
      this.props.navigate(path)
    }
  }

  render () {
    const { posts } = this.props

    if (posts === null) return <div> carregando os dados ...</div>

    return <Home
      posts={posts}
      onClicksPost={this.onClicks}
      onClicksFilter={this.onClicks}
    />
  }
}

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => {
  const navigate = RouterUtils.Router(dispatch)
  return { dispatch, ...navigate }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
)
