import React, { useState, Fragment } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { COMMENTS_TYPE_ACTION } from '../../../../services/actions/comments'

const EditComment = (props) => {
  const [ body, setBody ] = useState(props.placeHolder)

  const sendData = () => {
    const action = COMMENTS_TYPE_ACTION.EDIT

    props.sendForm(action, { cardId: props.cardId, update: { body } })
    props.updateComment(body, new Date().toLocaleString())
    props.formClose()
  }

  const isValid = () => {
    return body === ''
  }

  return (
    <Fragment>
      <Dialog
        open={props.formOpen}
        onClose={() => props.formClose()}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Edit Comment</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            onChange={event => setBody(event.target.value)}
            value={body}
            fullWidth
          />

        </DialogContent>

        <DialogActions>
          <Button onClick={() => props.formClose()} color='primary'> Cancel </Button>
          <Button disabled={isValid()}onClick={sendData} color='primary' > Send </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default EditComment
