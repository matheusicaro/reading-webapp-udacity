import React, { useState, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const formDataDefault = {
  title: 'Title do form Default',
  formContext: 'Contexto do form Default'
}
export const FormGeneric = ({ formOpen, formData = formDataDefault }) => {
//   const [formClose, setFormClose] = useState(true)
  //   const [anchorEl, setAnchorEl] = useState({})

  const { title, formContext } = formData
  console.log(useState)

  return (
    <Fragment>
      <Dialog
        open={formOpen}
        // onClose={formClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>{ title }</DialogTitle>
        <DialogContent>
          <DialogContentText>
            { formContext }
          </DialogContentText>
          {/* {labels.map(label => (
            <TextField
                autoFocus
                margin='dense'
                id='name'
                label={label}
                type='email'
                fullWidth
            />
          ) */}
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='{label}'
            type='email'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={'this.handleClose'} color='primary'>
              Cancel
          </Button>
          <Button onClick={'this.handleClose'} color='primary'>
              Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}
