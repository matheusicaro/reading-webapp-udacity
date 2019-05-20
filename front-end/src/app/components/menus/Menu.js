/*******************************
* Componente generico que é responsavel por apresentar um menu em qualquer ação por um butão por exemplo.
*
* [ items.text ] : Um texto será demonstrado no menu
* [ items.action ] : Uma ação para ser retornada para o dispatch pelo redux
* [ items.preAction ] : Uma ação para ser retornada para o dispatch pelo redux
* [ cardId ] : Identificação do elemento que ocorrerá as ações de click
* [ button.icon ] : Icone do button que acionará o menu
* [ selectOnClick ] : Função recebida pelo componente quando ocorrer o onClick
********************************/

import React, { useState } from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon'

import FormDialogGeneric from '../forms/FormDialog'

const defaultItems = [
  { text: 'element-1 [share]', action: 'share' },
  { text: 'element-2 [edit] ', action: 'edit' },
  { text: 'element-3 [delete] ', action: 'delete' }
]

export const MenuOpenByClickInButton = ({
  button = {},
  items = defaultItems,
  selectOnClick = {},
  cardId
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [formData, setFormData] = useState(null)
  const [formAction, setAction] = useState(null)
  const [anchorEl, setAnchorEl] = useState({})

  const menuHandleClick = event => {
    setMenuOpen(!menuOpen)
    setAnchorEl(event.currentTarget)
  }

  const itemHandleClick = item => {
    if (item.form) {
      setFormData(item.form.data)
      setAction(item.action)
      setFormOpen(!formOpen)
      setMenuOpen(!menuOpen)
    } else {
      selectOnClick(item.action, cardId)
      setMenuOpen(!menuOpen)
    }
  }

  const sendForm = data => {
    setFormOpen(!formOpen)
    selectOnClick(formAction, { cardId, update: data })
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
          <MenuItem key={item.text} onClick={event => itemHandleClick(item)}>
            {item.text}
          </MenuItem>
        ))}
      </Menu>

      <FormDialogGeneric
        formOpen={formOpen}
        formClose={() => setFormOpen(!formOpen)}
        formData={formData}
        sendForm={sendForm}
      />

    </React.Fragment>
  )
}
