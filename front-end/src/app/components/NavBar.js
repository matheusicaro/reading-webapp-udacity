import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { Router, Categories } from '../../utils'
// import { ROUTES } from '../../constants'

const NavBar = (props) => {
  const { categories } = props

  const parseCategories = (categories, navigate) => {
    if (typeof categories === 'object') {
      categories = Categories.formartCategories(categories)
      return categories.map(category => (
        <Button key={category.name} color='inherit' onClick={event => navigate(event, category.path)}>
          { category.name }
        </Button>
      ))
    }
  }

  const navigate = (event, path) => {
    event.preventDefault()
    props.navigate(path)
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' color='inherit' className='flex-grow'>
          Udacity Leadings
        </Typography>

        <div>
          { categories && parseCategories(categories, navigate) }
        </div>

      </Toolbar>
    </AppBar>
  )
}

const mapDispatchToProps = dispatch => Router(dispatch)

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(NavBar)
)
