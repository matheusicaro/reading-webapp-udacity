import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Post, Categories } from '../../../services/actions'
import { POST } from '../../constants/actions'
import { FILTER } from '../../constants'
import { HomeUtils } from '../../../utils'

import Home from './Home'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: null,
      filteredPosts: null,
      categories: null
    }
  }

  initialDate () {
    this.props.dispatch(Post.initialData)
    this.props.dispatch(Categories.initialData)
  }

  componentDidMount () {
    if (this.state.posts === null || this.state.categories === null) this.initialDate()
  }

  onClicksPost = (action, postId, data) => {
    if (
      action === POST.CHANGE_VOTE.upVote ||
      action === POST.CHANGE_VOTE.downVote
    ) this.props.dispatch(Post.updateScore(action, postId))

    else if (action === POST.DELETE) this.props.dispatch(Post.delete(postId))
    else if (action === POST.EDIT) this.props.dispatch(Post.edit(postId, data))
  };

  onClicksFilter = (filter, data) => {
    if (filter === FILTER.CATEGORIES) {
      const filteredPosts = HomeUtils.getPostsByCategories(data, this.state.posts)
      this.setState({ filteredPosts })
    }
    // else if(action === FILTER.Date)
    // else if(action === FILTER.Smaller_Score)
    // else if(action === FILTER.Bigger_Score)
  }

  render () {
    // eslint-disable-next-line
    this.state.posts = this.props.posts
    // eslint-disable-next-line
    this.state.categories = this.props.categories
    const { posts, filteredPosts, categories } = this.state

    return <Home
      posts={filteredPosts || posts}
      categories={categories}
      onClicksPost={this.onClicksPost}
      onClicksFilter={this.onClicksFilter}
    />
  }
}

const mapStateToProps = ({ posts, categories, router }) => ({ posts, categories, router })

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
