import React from 'react'
import PropTypes from 'prop-types'

import PostCard from './PostCard'

const PostContainer = ({
  card = {},
  onclick,
  disableTitleNavigation = false,
  hideCommentIcone = false
}) => {
  const cardDate = new Date(card.timestamp)

  return (
    <PostCard
      onclick={onclick}
      card={card}
      cardDate={cardDate}
      hideCommentIcone={hideCommentIcone}
      disableTitleNavigation={disableTitleNavigation}
    />
  )
}

PostContainer.propTypes = {
  card: PropTypes.object.isRequired,
  onclick: PropTypes.func.isRequired,
  disableTitleNavigation: PropTypes.bool,
  disableButtonComment: PropTypes.bool.isRequired
}

export default PostContainer
