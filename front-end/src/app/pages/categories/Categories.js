import React from 'react'

import NavBar from '../../components/NavBar'

import { PostsDashboard } from '../../components/dashboards'

const Categories = (props) => {
  return (
    <div style={container}>
      <NavBar categories={props.categories} />
      <PostsDashboard
        posts={props.posts}
        onClicksPost={props.onClicksPost}
        categories={props.categories}
      />
    </div>
  )
}

export default Categories

const container = {
  'display': 'grid',
  'gridGap': '5%',
  'justifyItems': 'center',
  'width': '100%'
}
