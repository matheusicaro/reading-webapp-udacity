import React from 'react'
import { Post } from '../post'

import lodash from 'lodash'
import './style.css'

export const Dashboard = (props) => {
  let posts = lodash.valuesIn(props.posts)
  return (
    <div className='dashboard'>
      { posts &&
            posts.map(post => <Post post={post} onclick={props.onclick} />) }
    </div>

  )
}
