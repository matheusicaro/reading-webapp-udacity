import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Post } from '../../../services/actions'
import { CARD_BUTTON as ACTION_POST } from '../../constants/actions'
import { ROUTES, FILTER } from '../../constants'
import { RouterUtils, SortBy, parseDataPropsToState } from '../../../utils'

import Home from './Home'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      aplicatedFilter: false
    }
  }

  initialDate () {
    this.props.dispatch(Post.initialData)
  }

  componentDidMount () {
    if (this.props.posts === null) this.initialDate()
  }

  onClicksCard = (action, postId, data) => {
    if (
      action === ACTION_POST.CHANGE_VOTE.upVote ||
      action === ACTION_POST.CHANGE_VOTE.downVote
    ) this.props.dispatch(Post.updateScore(action, postId))

    else if (action === ACTION_POST.DELETE) this.props.dispatch(Post.delete(postId))
    else if (action === ACTION_POST.EDIT) this.props.dispatch(Post.edit(postId, data))
    else if (action === ROUTES.NAVIGATE) this.props.navigate(`${ROUTES.POST.path}/${postId}`)
  };

  applyingFilter = (filter) => {
    let { posts } = this.state
    if (filter === FILTER.Date) {
      posts = SortBy.Date(posts)
      this.setState(posts)
    }
    //   const newOrderingPosts = HomeUtils.applyingFilter(filter, posts)
    //   this.setState({ posts: newOrderingPosts, filter, appliedFilter: true })
    // }

    // if (filter === FILTER.CATEGORIES) {
    //   const filteredPosts = HomeUtils.getPostsByCategories(filterByCategories, posts)
    //   this.setState({ filteredPosts })
    // } else if (filter === FILTER.Date) {
    //   const filteredPosts = HomeUtils.sortPostsByDate(this.state.filteredPosts || posts)
    //   this.setState({ filteredPosts })
    // } else if (filter === FILTER.Bigger_Score) {
    //   const filteredPosts = HomeUtils.sortPostsByBiggerScore(this.state.filteredPosts || posts)
    //   this.setState({ filteredPosts })
    // } else if (filter === FILTER.Smaller_Score) {
    //   const filteredPosts = HomeUtils.sortPostsBymallerScore(this.state.filteredPosts || posts)
    //   this.setState({ filteredPosts })
    // }
  }

  render () {
    const posts = parseDataPropsToState(this.props.posts)

    if (posts.length === 0) return <div> carregando os dados ...</div>

    return <Home
      posts={posts}
      onClicksPost={this.onClicksCard}
      onClicksFilter={this.applyingFilter}
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
