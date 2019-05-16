import React, { Fragment, useState } from 'react'

import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'
import { send } from '../assets/icons'

import { CARD_BUTTON as ACTION_COMMENT } from '../constants/actions'

export const Form = ({ onclick }) => {
  const [inputComment, setInputComment] = useState('')
  const [inputAuthor, setAuthor] = useState('')

  const handleClick = () => {
    onclick(ACTION_COMMENT.SEND_COMMENTER, { body: inputComment, author: inputAuthor })
    setInputComment('')
    setAuthor('')
  }

  return (
    <Fragment>

      <FormControl fullWidth>
        <InputLabel htmlFor='adornment-amount'>Send a comment</InputLabel>
        <Input
          value={inputComment}
          onChange={event => setInputComment(event.target.value)}
        />
      </FormControl>

      <div style={style.container}>
        <FormControl >
          <InputLabel htmlFor='adornment-amount'>Your name:</InputLabel>
          <Input
            value={inputAuthor}
            onChange={event => setAuthor(event.target.value)}
          />
        </FormControl>

        <Button style={style.button} onClick={handleClick}>
          <SvgIcon>
            <path d={send} />
          </SvgIcon>
          <Typography variant='button' gutterBottom style={style.textButton}>
          COMMENT
          </Typography>
        </Button>
      </div>

    </Fragment>
  )
}

const style = {
  button: { 'minWidth': '0px' },
  textButton: {
    'margin': ' 0 1%',
    'fontStyle': 'initial'
  },
  container: {
    'display': 'grid',
    'gridAutoFlow': 'column'
  }
}
