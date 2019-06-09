import React from 'react'
import { NavBar } from '../../components/navbar'

const NotFound = () => {
  return (
    <div className={'pages-container '}>
      <NavBar />

      <div>
        <h2 style={{ marginTop: '15%' }} > Post was not found, click in Home to go a page of posting lists </h2>
        <h1 style={{ marginTop: '10%', textAlign: 'center' }}> ERROR 404 </h1>
      </div>

    </div>
  )
}

export default NotFound
