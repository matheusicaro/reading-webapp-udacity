import React, { useState } from 'react'
import SelectOption from './SelectOption'

const SelectOptionContainer = (props) => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState('')
  const options = props.options.values

  const handleChange = event => {
    event.preventDefault()
    setSelect(event.target.value)
    const selected = props.options[event.target.value.replace(' ', '_')]
    props.onclick(selected)
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <SelectOption
      open={open}
      handleOpen={handleOpen}
      handleClose={handleOpen}
      handleChange={handleChange}
      select={select}
      titleOptions={props.options.titleOptions}
      options={options}
    />
  )
}

export default SelectOptionContainer
