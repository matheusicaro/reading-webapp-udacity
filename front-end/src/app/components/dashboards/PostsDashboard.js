import React from 'react'
import { PostCardContainer as PostCard } from '../card'

import { forIn as forEachInObject } from 'lodash'

const PostsDashboard = (props) => {
  const posts = []
  props.posts.map(post => forEachInObject(post, valuesOfPost => posts.push(valuesOfPost)))

  return (
    <div style={style.container}>
      { posts.length !== 0 &&
      posts.map(post => <PostCard
        key={post.id}
        card={post}
        onclick={props.onClicksPost}
      />) }
    </div>
  )
}

const style = {
  container: {
    'display': 'grid',
    'gridGap': '5%'
  }
}

export default PostsDashboard
