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
import Typography from '@material-ui/core/Typography'

export const ButtonGeneric = ({ onclick = false, button, data, simpleTitle, name = false }) => {
  const handleClick = (event) => {
    event.preventDefault()
    if (!onclick) return ''
    onclick(button.action, data)
  }
  return (
    <Button style={style.button} onClick={handleClick}>
      <div style={(name || button.name) ? style.text : style.none}>
        { name &&
        <Typography variant='button' gutterBottom>
          { name }
        </Typography>

        }

        { button.name &&
        <Typography variant='button' gutterBottom>
          { button.name }
        </Typography>

        }
      </div>

      { button.icon &&
        <div>
          <SvgIcon>
            <path d={button.icon} />
          </SvgIcon>
        </div>

      }

    </Button>
  )
}

const style = {
  button: { 'minWidth': '0px' },
  text: {
    'margin': '0px 10px',
    'fontStyle': 'initial'
  },
  none: {
    'margin': '0px 0px',
    'fontStyle': 'initial'
  }
}
