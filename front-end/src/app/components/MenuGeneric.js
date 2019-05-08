import React, { useState } from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon'

const defaultItems = [
  { text: 'element-1', action: 'call dispatch', id: 'id' },
  { text: 'element-2', action: 'call dispatch', id: 'id' },
  { text: 'element-3', action: 'call dispatch', id: 'id' }
]

export const MenuGeneric = ({
  button = {},
  items = defaultItems,
  selectOnClick = {},
  cardId
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState({})

  const menuHandleClick = event => {
    setMenuOpen(!menuOpen)
    setAnchorEl(event.currentTarget)
  }

  const itemHandleClick = event => {
    const action = event.target.innerText
    selectOnClick(action, cardId)
  }

  return (
    <React.Fragment>
      <Button style={{ minWidth: '0px' }} onClick={menuHandleClick}>
        <SvgIcon>
          <path d={button.icon} />
        </SvgIcon>
      </Button>
      <Menu anchorEl={anchorEl} open={menuOpen} onClose={menuHandleClick}>
        {items.map(item => (
          <MenuItem key={item.text} onClick={itemHandleClick}>
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )
}
