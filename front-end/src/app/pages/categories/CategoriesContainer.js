import React from 'react'
import { connect } from 'react-redux'

import Categories from './Categories'
import { SortBy, DispatchUteis } from '../../../utils'
import { CARD_BUTTON as ACTION_POST } from '../../constants/actions'
import { ROUTES } from '../../constants'
import { Post } from '../../../services/actions'

const CategoriesPage = (props) => {
  if (props.posts === null) {
    DispatchUteis.initialDate()
  }
  const { category } = props.match.params
  const posts = SortBy.category(category, props.posts)

  const onClicksCard = (action, postId, data) => {
    if (
      action === ACTION_POST.CHANGE_VOTE.upVote ||
      action === ACTION_POST.CHANGE_VOTE.downVote
    ) this.props.dispatch(Post.updateScore(action, postId))

    else if (action === ACTION_POST.DELETE) this.props.dispatch(Post.delete(postId))
    else if (action === ACTION_POST.EDIT) this.props.dispatch(Post.edit(postId, data))
    else if (action === ROUTES.NAVIGATE) this.props.navigate(`${ROUTES.POST.path}/${postId}`)
  }

  return (
    <Categories posts={posts} onClicksPost={onClicksCard} />
  )
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(
  mapStateToProps,
  null
)(CategoriesPage)
