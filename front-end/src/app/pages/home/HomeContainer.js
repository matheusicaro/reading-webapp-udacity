import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { PostAction, POST_TYPE_ACTION } from '../../../services/actions/post'
import { ROUTES } from '../../constants'

import { RouterUtils } from '../../../utils'

import Home from './Home'
import Warnings from '../../components/Warnings'

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

  componentWillMount () {
    if (this.props.posts === null) this.initialDate()
  }

  onClicks = (action, data) => {
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
    } else if (action === POST_TYPE_ACTION.SELECT_ORDER_BY_OPTION) {
      const optionFilter = data || window.alert('** ERROR IN FILTER, BUTTON UNDEFINED')
      this.props.dispatch(PostAction.orderBy(optionFilter))
    } else if (action === POST_TYPE_ACTION.CREATE_NEW_POST) {
      this.props.dispatch(PostAction.createNewPost(data))
    }
  }

  render () {
    const { posts } = this.props

    if (posts === null) return <Warnings message={'Loading...'} />

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
