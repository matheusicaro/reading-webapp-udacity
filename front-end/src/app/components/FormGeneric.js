import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import lodash from 'lodash'

const formDataDefault = {
  title: 'Title do form Default',
  formContext: 'Contexto do form Default'
}
export const FormGeneric = ({ formOpen, formClose, formData = formDataDefault, sendForm }) => {
  const { title, formContext, fields } = formData || formDataDefault
  let data = {}

  const sendData = (event) => {
    event.preventDefault()
    sendForm(data)
  }

  const incrementValues = (label, value) => {
    lodash.set(data, label, value)
  }

  return (
    <Fragment>
      <Dialog
        open={formOpen}
        onClose={() => formClose()}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>{ title }</DialogTitle>
        <DialogContent>
          <DialogContentText>
            { formContext }
          </DialogContentText>
          { fields && fields.map(field => (
            <TextField
              key={field.label}
              autoFocus
              margin='dense'
              id='name'
              onChange={(event) => incrementValues(field.value, event.target.value)}
              label={field.label}
              fullWidth
            />
          ))}

        </DialogContent>
        <DialogActions>
          {/*
*******************************
*
* TODO: translate, montar constantes para os buttons CANCEL E SUBSCRIBE
*
********************************/
          }
          <Button onClick={() => formClose()} color='primary'>
              Cancel
          </Button>
          <Button onClick={sendData} color='primary'>
              Send
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}
