import React, { Fragment, useState } from 'react'
import lodash from 'lodash'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const formDataDefault = {
  title: 'Title do form Default',
  formContext: 'Contexto do form Default'
}
export const FormDialog = ({ formOpen, formClose, formData = formDataDefault, sendForm, formToNewPost = false }) => {
  const { checkedRedux } = useState(false)
  const { checkedReact } = useState(false)
  const { checkedUdacity } = useState(false)

  const { title, formContext, fields } = formData || formDataDefault
  let data = {}

  const sendData = (event) => {
    event.preventDefault()
    sendForm(data)
  }

  const incrementValues = (label, value) => {
    lodash.set(data, label, value)
  }

  const checkedCategories = (event) => {
    console.log(event)
  }

  // TODO

  // 1 - fazer os checks desabilitarem os outros qunado selecionado apenas

  // 2 - depois anexar tudo em data atraves do increment values e ai enviar o form

  const getOptionsToNewPost = () => {
    return (
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedReact}
              onChange={() => checkedCategories('React')}
              value='React'
              color='primary'
            />
          }
          label='React'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedRedux}
              onChange={() => checkedCategories('Redux')}
              value='Redux'
              color='primary'
            />
          }
          label='Redux'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedUdacity}
              onChange={() => checkedCategories('Udacity')}
              value='Udacity'
              color='primary'
            />
          }
          label='Udacity'
        />
      </div>
    )
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

        { formToNewPost && getOptionsToNewPost()}

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
