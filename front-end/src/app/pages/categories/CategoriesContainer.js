import React from 'react'
import { connect } from 'react-redux'

import Categories from './Categories'
import { SortBy, DispatchUteis } from '../../../utils'
import { ROUTES } from '../../constants'
import { POST_TYPE_ACTION, PostAction } from '../../../services/actions/post'

const CategoriesPage = (props) => {
  if (props.posts === null) {
    DispatchUteis.initialDate()
  }
  const { category } = props.match.params
  const posts = SortBy.category(category, props.posts)

  const onClicksCard = (action, postId, data) => {
    if (
      action === POST_TYPE_ACTION.CHANGE_VOTE.upVote ||
      action === POST_TYPE_ACTION.CHANGE_VOTE.downVote
    ) this.props.dispatch(PostAction.updateScore(action, postId))

    else if (action === POST_TYPE_ACTION.DELETE) this.props.dispatch(PostAction.delete(postId))
    else if (action === POST_TYPE_ACTION.EDIT) this.props.dispatch(PostAction.edit(postId, data))
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
