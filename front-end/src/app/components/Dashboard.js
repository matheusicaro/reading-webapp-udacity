import React from 'react'
import { PostCard } from './card'
import { Filter } from './filter'
import { CARD_POST } from '../constants/buttons'

export const Dashboard = (props) => {
  return (
    <div style={style.container}>
      <Filter byPosts={''} onclick={props.onClicksFilter} byCategories={props.categories} hide={false} />

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
