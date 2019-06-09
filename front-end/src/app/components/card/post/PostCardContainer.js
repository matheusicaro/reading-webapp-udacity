import React from 'react'
import PropTypes from 'prop-types'

import PostCard from './PostCard'

const PostContainer = ({
  card = {},
  onclick,
  disableTitleNavigation = false,
  hideCommentIcone = false,
  home
}) => {
  const cardDate = new Date(card.timestamp)

  return (
    <PostCard
      onclick={onclick}
      card={card}
      cardDate={cardDate}
      hideCommentIcone={hideCommentIcone}
      disableTitleNavigation={disableTitleNavigation}
      home
    />
  )
}

PostContainer.propTypes = {
  card: PropTypes.object.isRequired,
  onclick: PropTypes.func.isRequired,
  disableTitleNavigation: PropTypes.bool,
  hideCommentIcone: PropTypes.bool
}

export default PostContainer
