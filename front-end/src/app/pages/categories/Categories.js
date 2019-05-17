import React from 'react'

import NavBar from '../../components/NavBar'

import { Dashboard } from '../../components'

const Categories = (props) => {
  return (
    <div style={container}>
      <NavBar categories={props.categories} />
      <Dashboard
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
