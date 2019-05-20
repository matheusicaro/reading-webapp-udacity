import React, { Fragment } from 'react'
import { NavBar } from './navbar'

const Warnings = ({ message }) => {
  return (
    <Fragment>
      <NavBar />
      <div style={styleWarnings}> {message} </div>
    </Fragment>
  )
}

export default Warnings

const styleWarnings = {
  position: 'absolute',
  top: '50%',
  left: '40%',
  fontSize: '30px'
}
