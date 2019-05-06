import React from 'react'
import { Dashboard } from '../../components/dashboard'

const Home = props => {
  return <Dashboard posts={props.posts} onclick={props.onclick} />
}

export default Home
