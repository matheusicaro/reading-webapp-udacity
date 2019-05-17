import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import FilterByCategories from './FilterByCategories'
import FilterByPost from './FilterByPost'

import { FormDialog as Form } from '../'

import './filter.css'

export const Filter = ({ byCategories, onclick, hide }) => {
  const [formOpen, setFormOpen] = useState(false)
  // const [formAction, setAction] = useState(null)

  const menuHandleClick = event => {
    setFormOpen(!formOpen)
  }
  console.log(formOpen)
  const sendForm = data => {
    console.log(data)
    // setFormOpen(!formOpen)
    // selectOnClick(formAction, cardId, data)
  }

  if (hide) return ''

  return (
    <div className='container'>
      <FilterByPost onclick={onclick} />
      { byCategories && <FilterByCategories {...byCategories} onclick={onclick} /> }

      <div>
        <Button style={{ minWidth: '0px' }} onClick={menuHandleClick}>
          <Typography variant='button' gutterBottom>
          CREATE NEW POST
          </Typography>
        </Button>

        <Form
          formOpen={formOpen}
          formClose={() => setFormOpen(!formOpen)}
          formData={formDataNewPost} sendForm={sendForm}
          formToNewPost />
      </div>

    </div>
  )
}

const formDataNewPost = {
  title: 'Create New Post',
  formContext: '',
  fields: [
    { label: 'Title of Post', value: 'title' },
    { label: 'Text of Post', value: 'body' },
    { label: 'Author of Post', value: 'author' }
  ]
}
