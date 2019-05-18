import React from 'react'
import { PostCard } from '../card'
import { CARD_POST } from '../../constants/buttons'

export const PostsDashboard = (props) => {
  return (
    <div style={style.container}>
      { props.posts.length !== 0 &&
      props.posts.map(post => <PostCard
        key={post.id}
        card={post}
        onclick={props.onClicksPost}
        buttons={CARD_POST.footer}
        menuDots={CARD_POST.menuDots} />) }
    </div>
  )
}

const style = {
  container: {
    'display': 'grid',
    'gridGap': '5%'
  }
}
