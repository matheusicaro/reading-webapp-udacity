import React, { Fragment } from 'react'
import { Dashboard } from '../../components/dashboard'
import NavBar from '../../components/NavBar'

import { CARD_BUTTONS } from '../../constants/buttons'

import './home.css'

const Home = props => {
  return (
    <Fragment>
      <div className='dashboard-container'>
        <NavBar categories={props.categories} />
        <Dashboard
          cards={props.posts}
          categories={props.categories}
          onClicksPost={props.onClicksPost}
          onClicksFilter={props.onClicksFilter}
          cardButtons={CARD_BUTTONS}
        />
      </div>
    </Fragment>
  )
}

export default Home
