import React from 'react'

import NavBar from '../../components/navbar/NavBar'
import { PostsDashboard } from '../../components/dashboards'
import { SelectOptionContainer as FilterByCategories } from '../../components/selects'
import { NewPostContainer as NewPostForm } from '../../components/forms/posts'
import { filters } from '../../../utils'

import '../style.css'

const Home = props => {
  return (
    <div className={'pages-container '}>
      <NavBar />

      <div className='pages-filter-createNewPost' >
        <FilterByCategories options={filters} onclick={props.onClicksFilter} />
        <NewPostForm onclick={props.onClicksFilter} />
      </div>

      <div className='pages-dashboards'>
        <PostsDashboard
          posts={props.posts}
          onClicksPost={props.onClicksPost}
          onClicksFilter={props.onClicksFilter}
          categories={props.categories}
        />
      </div>

    </div>
  )
}

export default Home
