import React, { useState } from 'react'
import lodash from 'lodash'

import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { FILTER } from '../../constants'

export const FilterByCateries = ({ onclick, categories }) => {
  const [fields, setFields] = useState(initialState(categories))
  const [update, renderUpdate] = useState(false)

  const handleChange = (event, path, checked) => {
    event.preventDefault()
    const newState = lodash.set(fields, path, !checked)
    setFields(newState)
    renderUpdate(!update)
    onclick(FILTER.CATEGORIES, newState)
  }

  return (
    <FormGroup row>
      { categories && categories.map((category, index) => {
        return (
          <FormControlLabel
            control={
              <Checkbox
                key={index}
                checked={fields[category.name]}
                onClick={event => handleChange(event, category.name, fields[category.name])}
                value={category.name}
              />
            }
            key={index}
            label={category.name}
          />
        )
      })}
    </FormGroup>
  )
}

const initialState = (categories) => {
  let state = {}
  if (categories && Array.isArray(categories)) {
    const nameProps = categories.map(value => value.name)
    state = lodash.zipObject(nameProps, nameProps.map(value => true))
    return state
  }
  return state
}

export default FilterByCateries
