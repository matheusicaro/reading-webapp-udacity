import React from 'react'
import { PostCardContainer as PostCard } from '../card'

import { forIn as forEachInObject } from 'lodash'

const PostsDashboard = (props) => {
  const posts = []
  props.posts.map(post => forEachInObject(post, valuesOfPost => posts.push(valuesOfPost)))
  const isEmpty = posts.length === 0
  return (
    <div style={style.container}>
      { !isEmpty &&
      posts.map(post => <PostCard
        key={post.id}
        card={post}
        onclick={props.onClicksPost}
      />) }

      { isEmpty && <h2 style={{ textAlign: 'center' }}>NO POST FOUND FOR THIS CATEGORY</h2>}
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
