import React, { Fragment } from 'react'
import lodash from 'lodash'

import NavBar from '../../components/NavBar'
import { PostCard } from '../../components/card'
import { Filter } from '../../components/filter'

import { CARD_BUTTONS } from '../../constants/buttons'

import './home.css'

const Home = props => {
  const posts = lodash.valuesIn(props.posts)

  return (
    <Fragment>
      <div className='home-container'>
        <NavBar categories={props.categories} />

        <div className='home-dashboard'>
          <Filter byPosts={''} onclick={props.onClicksFilter} byCategories={props.categories} hide={false} />

          { posts.length !== 0 &&
            posts.map(post => <PostCard
              key={post.id}
              card={post}
              onclick={props.onClicksPost}
              buttons={CARD_BUTTONS.footer}
              menuDots={CARD_BUTTONS.menuDots} />) }
        </div>

      </div>
    </Fragment>
  )
}

export default Home
