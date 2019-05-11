/*******************************
* Componente generico que é responsavel por apresentar um butão que quando receber um click,
* deverá invormar o evento para função recebida..
*
* [ onclick ] : Função que vai escultar os eventos de click
* [ button.icon ] : Icone do botão
* [ button.name ] : Nome ou Texto que vai representar o menu do botão
* [ data ] : Identificação do elemento que ocorrerá as ações de click
********************************/

import React from 'react'
import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon'

export const ButtonGeneric = ({ onclick, button, data }) => {
  const handleClick = (event) => {
    event.preventDefault()
    onclick(button.action, data)
  }
  return (
    <Button style={{ 'minWidth': '0px' }} onClick={handleClick}>
      <SvgIcon>
        <path d={button.icon} />
      </SvgIcon>
      { button.name }
    </Button>
  )
}
