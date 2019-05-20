import React from 'react'

import NavBar from '../../components/navbar/NavBar'
import { PostsDashboard } from '../../components/dashboards'
import { SelectOptionContainer as FilterByCategories } from '../../components/selects'
import { NewPostContainer as NewPostForm } from '../../components/forms/posts'

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
        <NewPostForm onclick={props.onClicksFilter} />
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
