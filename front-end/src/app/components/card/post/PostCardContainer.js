import React from 'react'
import PostCard from './PostCard'

const PostContainer = ({
  card = {},
  onclick,
  menuDots,
  buttons,
  disableTitleNavigation = false,
  disableButtonComment = false
}) => {
  const cardDate = new Date(card.timestamp)

  return (
    <PostCard
      onclick={onclick}
      card={card}
      cardDate={cardDate}
      disableButtonComment={disableButtonComment}
      disableTitleNavigation={disableTitleNavigation}
    />
  )
}

export default PostContainer
