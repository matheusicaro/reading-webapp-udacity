import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { RouterUtils, CategoriesUtils } from '../../../utils'
import { Categories } from '../../../services/actions'
import { ROUTES } from '../../constants'

import './style.css'

const NavBar = props => {
  const { categories } = props

  if (categories === null) {
    props.dispatch(Categories.initialData)
  }

  const parseCategories = (categories, navigate) => {
    if (typeof categories === 'object') {
      categories = CategoriesUtils.formartCategories(categories)
      return categories.map(category => (
        <Button
          key={category.name}
          color='inherit'
          onClick={event => navigate(event, `${ROUTES.CATEGORIES.path}/${category.path}`)}
        >
          {category.name}
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
        <div className='navbar-container'>
          <Typography variant='h6' color='inherit' className='flex-grow'>
          Udacity Leadings
          </Typography>

          <Button
            color='inherit'
            onClick={event => navigate(event, ROUTES.HOME.path)}
          >
            {ROUTES.HOME.title}
          </Button>

          <div>{categories && parseCategories(categories, navigate)}</div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = ({ categories }) => ({ categories })

const mapDispatchToProps = dispatch => {
  const navigate = RouterUtils.Router(dispatch)
  return { dispatch, ...navigate }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
)
