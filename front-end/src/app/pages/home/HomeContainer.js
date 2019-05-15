import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Post, Categories } from '../../../services/actions'
import { CARD_BUTTON as POST } from '../../constants/actions'
import { FILTER, ROUTES } from '../../constants'
import { RouterUtils, HomeUtils } from '../../../utils'

import Home from './Home'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: null,
      filteredPosts: null,
      appliedFilter: false,
      categories: null
    }
  }

  initialDate () {
    this.props.dispatch(Post.initialData)
    this.props.dispatch(Categories.initialData)
  }

  componentWillMount () {
    if (this.state.posts === null || this.state.categories === null) this.initialDate()
  }

  onClicksCard = (action, postId, data) => {
    if (
      action === POST.CHANGE_VOTE.upVote ||
      action === POST.CHANGE_VOTE.downVote
    ) this.props.dispatch(Post.updateScore(action, postId))

    else if (action === POST.DELETE) this.props.dispatch(Post.delete(postId))
    else if (action === POST.EDIT) this.props.dispatch(Post.edit(postId, data))
    else if (action === ROUTES.NAVIGATE) this.props.navigate(`${ROUTES.POST.path}/${postId}`)
  };

  applyingFilter = (filter, filterByCategories, posts) => {
    if (filter === null) return posts
    else if (filter === FILTER.CATEGORIES) {
      HomeUtils.applyingFilterByCategories(filterByCategories, posts)
    } else {
      const newOrderingPosts = HomeUtils.applyingFilter(filter, posts)
      this.setState({ posts: newOrderingPosts, filter, appliedFilter: true })
    }

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
    // eslint-disable-next-line
    this.state.posts = this.props.posts
    // eslint-dis able-next-line
    this.state.categories = this.props.categories

    const { posts, categories, filter, appliedFilter } = this.state

    if (posts === null) this.initialDate()
    if (!appliedFilter) this.applyingFilter(filter, null, posts)

    return <Home
      posts={posts}
      categories={categories}
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
