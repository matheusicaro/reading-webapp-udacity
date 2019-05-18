import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { PostAction } from '../../../services/actions/post'

// import { ROUTES } from '../../constants'
import { RouterUtils, parseDataPropsToState } from '../../../utils'

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
    this.props.dispatch(PostAction.createNewPost(data))
    // if (
    //   action === POST_TYPE_ACTION.CHANGE_VOTE.upVote ||
    //   action === POST_TYPE_ACTION.CHANGE_VOTE.downVote
    // ) this.props.dispatch(PostAction.updateScore(action, postId))

    // else if (action === POST_TYPE_ACTION.DELETE) this.props.dispatch(PostAction.delete(postId))
    // else if (action === POST_TYPE_ACTION.EDIT) this.props.dispatch(PostAction.edit(postId, data))
    // else if (action === ROUTES.NAVIGATE) this.props.navigate(`${ROUTES.POST.path}/${postId}`)
  };

  applyingFilter = (filter, data) => {

  }

  render () {
    const { posts } = this.props

    if (posts === null) return <div> carregando os dados ...</div>

    // TODOR, CONVERTER DADOS NOVAMENTE PARA O FORMATO DA API POIS O CODIGO FOI FEITO EM CIMA DO FORMATO DA API

    return <Home
      posts={posts}
      onClicksPost={this.onClicks}
      onClicksFilter={this.onClicks}
    />
  }
}

const mapStateToProps = ({ posts, categories }) => ({ posts, categories })

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
