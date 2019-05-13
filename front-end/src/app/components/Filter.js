import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export const Filter = ({ onChecked, categories }) => {
  console.log(categories)
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={'this.state.checkedA'}
            onChange={'this.handleChange()'}
            value='checkedA'
          />
        }
        label='Secondary'
      />
    </FormGroup>

  )
}
