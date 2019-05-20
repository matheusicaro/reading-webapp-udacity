import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import './filter.css'

const SelectOption = ({ open, handleOpen, select, handleChange, titleOptions, options }) => {
  return (
    <form autoComplete='off' className='filter-by-post'>
      <FormControl style={styles.formControl}>
        <InputLabel htmlFor='demo-controlled-open-select'>{titleOptions}</InputLabel>
        <Select
          open={open}
          onClose={handleOpen}
          onOpen={handleOpen}
          value={select}
          onChange={handleChange}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
        </Select>
      </FormControl>
    </form>
  )
}

export default SelectOption

const styles = {
  button: {
    display: 'block'
  },
  formControl: {
    minWidth: 120
  }
}
