import React, { Fragment, useState } from 'react'

import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'
import { send } from '../assets/icons'

export const Form = ({ onclickButton }) => {
  const [inputText, setInputText] = useState('')

  const handleClick = () => {
    onclickButton('ACTION SEND COMMENT', inputText)
  }

  return (
    <Fragment>
      <FormControl fullWidth>
        <InputLabel htmlFor='adornment-amount'>Send a comment</InputLabel>
        <Input
          id='adornment-amount'
          value={inputText}
          onChange={event => setInputText(event.target.value)}
        />
      </FormControl>

      <Button style={style.button} onClick={handleClick}>
        <SvgIcon>
          <path d={send} />
        </SvgIcon>
        <Typography variant='button' gutterBottom style={style.text}>
          COMMENT
        </Typography>
      </Button>

    </Fragment>
  )
}

const style = {
  button: { 'minWidth': '0px' },
  text: {
    'margin': ' 0 1%',
    'fontStyle': 'initial'
  }
}
