import React, { useState } from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon'

const defaultItems = [
  { text: 'element-1', action: console.log('element-1') },
  { text: 'element-2', action: console.log('element-2') },
  { text: 'element-3', action: console.log('element-3') }
]

export const MenuGeneric = ({ button = {}, items = defaultItems }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(false)

  const handleClick = (event) => {
    setMenuOpen(!menuOpen)
    setAnchorEl(event.currentTarget)
  }

  return (
    <React.Fragment>
      <Button style={{ 'min-width': '0px' }} onClick={handleClick}>
        <SvgIcon>
          <path d={button.icon} />
        </SvgIcon>
      </Button>
      <Menu
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClick}
      >
        {items.map(item => <MenuItem onClick={item.action}>{item.text}</MenuItem>)}
      </Menu>
    </React.Fragment>
  )
}
