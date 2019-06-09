import React, { useState, Fragment } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { POST_TYPE_ACTION } from '../../../../../services/actions/post'

const EditPost = (props) => {
  const [ title, setTitle ] = useState(props.post.title)
  const [ body, setBody ] = useState(props.post.body)

  const sendData = () => {
    const update = { title, body }
    const action = POST_TYPE_ACTION.EDIT

    props.sendForm(action, update)
    props.formClose()
  }

  const isValid = () => {
    return title === '' || body === ''
  }

  return (
    <Fragment>
      <Dialog
        open={props.formOpen}
        onClose={() => props.formClose()}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>{props.post.title}</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            onChange={event => setTitle(event.target.value)}
            label='Title of Post'
            value={title}
            fullWidth
          />

          <TextField
            autoFocus
            margin='dense'
            id='name'
            onChange={event => setBody(event.target.value)}
            label={'Description of Post'}
            value={body}
            fullWidth
          />

        </DialogContent>

        <DialogActions>
          <Button onClick={() => props.formClose()} color='primary'> Cancel </Button>
          <Button disabled={isValid()} onClick={sendData} color='primary' > Send </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default EditPost
