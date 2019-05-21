import React, { useState } from 'react'

import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'
import { send } from '../../../assets/icons'

import { CARD_BUTTON as ACTION_COMMENT } from '../../../constants/actions'
import './style.css'

const NewComentForm = ({ onclick }) => {
  const [inputComment, setInputComment] = useState('')
  const [inputAuthor, setAuthor] = useState('')

  const handleClick = () => {
    onclick(ACTION_COMMENT.SEND_COMMENTER, { body: inputComment, author: inputAuthor })
    setInputComment('')
    setAuthor('')
  }

  return (
    <div className='container-border'>

      <FormControl fullWidth>
        <InputLabel htmlFor='adornment-amount'>Send a comment</InputLabel>
        <Input
          value={inputComment}
          onChange={event => setInputComment(event.target.value)}
        />
      </FormControl>

      <div className='grid-container'>
        <FormControl >
          <InputLabel htmlFor='adornment-amount'>Your name:</InputLabel>
          <Input
            value={inputAuthor}
            onChange={event => setAuthor(event.target.value)}
          />
        </FormControl>

        <Button className='button' onClick={handleClick}>
          <SvgIcon>
            <path d={send} />
          </SvgIcon>
          <Typography variant='button' gutterBottom className='text-button'>
          COMMENT
          </Typography>
        </Button>
      </div>

    </div>
  )
}

export default NewComentForm
