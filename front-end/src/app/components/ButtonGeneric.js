import React from 'react'
import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon'

export const ButtonGeneric = ({ onclick, data }) => {
  const { button, optionalContent } = data
  const handleClick = (event) => {
    event.preventDefault()
    onclick(button.action, optionalContent)
  }
  return (
    <Button style={{ 'min-width': '0px' }} onClick={handleClick}>
      <SvgIcon>
        <path d={button.icon} />
      </SvgIcon>
      { button.name }
    </Button>
  )
}
