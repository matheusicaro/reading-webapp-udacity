import React, { Fragment } from 'react'
import { set as setValuesInObject } from 'lodash'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { SelectOptionContainer as FilterByCategories } from '../selects'

const formDataDefault = {
  title: 'Title do form Default',
  formContext: 'Contexto do form Default'
}

const FormDialogGeneric = ({
  formOpen,
  formClose,
  formData = formDataDefault,
  sendForm,
  formToNewPost = false
}) => {
  const { title, formContext, fields } = formData || formDataDefault

  let formDataToBeSent = {}

  const sendData = event => {
    event.preventDefault()
    sendForm(formDataToBeSent)
  }

  const incrementValues = (key, value) => {
    setValuesInObject(formDataToBeSent, key, value)
  }

  const selectCategories = value => {
    const key = 'category'
    setValuesInObject(formDataToBeSent, key, value)
  }

  const filters = {
    titleOptions: 'Category of Post',
    React: 'react',
    Redux: 'redux',
    Udacity: 'udacity',
    values: ['React', 'Redux', 'Udacity']
  }

  return (
    <Fragment>
      <Dialog
        open={formOpen}
        onClose={() => formClose()}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>{title}</DialogTitle>

        <DialogContent>
          <DialogContentText>{formContext}</DialogContentText>
          {fields &&
            fields.map(field => (
              <TextField
                key={field.label}
                autoFocus
                margin='dense'
                id='name'
                onChange={event =>
                  incrementValues(field.value, event.target.value)
                }
                label={field.label}
                fullWidth
              />
            ))}

          <div style={{ marginTop: '5%' }}>
            {formToNewPost && <FilterByCategories onclick={selectCategories} options={filters} />}
          </div>
        </DialogContent>

        <DialogActions>
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

export default FormDialogGeneric
