import React from 'react'

import NavBar from '../../components/NavBar'
import { PostsDashboard } from '../../components/dashboards'
import { SelectOptionContainer as FilterByCategories } from '../../components/select'
import { NewPostContainer as NewPost } from '../../components/forms'

import './style.css'

const Home = props => {
  const filters = {
    titleOptions: 'Category of Post',
    React: 'react',
    Redux: 'redux',
    Udacity: 'udacity',
    values: ['React', 'Redux', 'Udacity']
  }

  return (
    <div style={container}>
      <NavBar />

      <div className='filter-and-createNewPost' >
        <FilterByCategories options={filters} onclick={props.onClicksFilter} />
        <NewPost onclick={props.onClicksFilter} />
      </div>

      <PostsDashboard
        posts={props.posts}
        onClicksPost={props.onClicksPost}
        onClicksFilter={props.onClicksFilter}
        categories={props.categories}
      />
    </div>
  )
}

export default Home

const container = {
  'display': 'grid',
  'gridGap': '5%',
  'justifyItems': 'center',
  'width': '100%'
}
