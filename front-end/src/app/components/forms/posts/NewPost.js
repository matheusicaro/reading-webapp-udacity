import React from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import FormDialogGeneric from '../FormDialog'

const NewPostForm = ({ menuHandleClick, formOpen, setFormOpen, sendForm }) => {
  const formDataNewPost = {
    title: 'Create New Post',
    formContext: '',
    fields: [
      { label: 'Title of Post', value: 'title' },
      { label: 'Text of Post', value: 'body' },
      { label: 'Author of Post', value: 'author' }
    ]
  }

  return (
    <div>
      <Button style={{ minWidth: '0px' }} onClick={menuHandleClick}>
        <Typography variant='button' gutterBottom>
          CREATE NEW POST
        </Typography>
      </Button>

      <FormDialogGeneric
        formOpen={formOpen}
        formClose={() => setFormOpen(!formOpen)}
        formData={formDataNewPost} sendForm={sendForm}
        formToNewPost />
    </div>
  )
}

export default NewPostForm
