import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { FILTER } from '../../constants'

import './filter.css'

const FilterByPost = props => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState('')
  const values = FILTER.values

  const handleChange = event => {
    event.preventDefault()
    setSelect(event.target.value)
    const action = FILTER[event.target.value.replace(' ', '_')]
    props.onclick(action)
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <form autoComplete='off' className='filter-by-post'>
      <FormControl style={styles.formControl}>
        <InputLabel htmlFor='demo-controlled-open-select'>Post by:</InputLabel>
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
          {values.map(value => <MenuItem key={value} value={value}>{value}</MenuItem>)}
        </Select>
      </FormControl>
    </form>
  )
}

export default FilterByPost

const styles = {
  button: {
    display: 'block'
  },
  formControl: {
    minWidth: 120
  }
}
