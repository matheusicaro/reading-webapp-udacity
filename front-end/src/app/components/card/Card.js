import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { ButtonGeneric as Button } from '../'
import { MenuCard as Menu } from './'
import { ROUTES } from '../../constants'

import loadsh from 'lodash'

import './style.css'

const cardDefault = {
  id: '',
  title: '',
  name: '',
  author: '',
  body: '',
  commentCount: '',
  voteScore: '',
  category: ''
}

export const Card = ({ card, onclick, menuDots, buttons }) => {
  card = card || cardDefault
  const date = card && card.timestamp ? new Date(card.timestamp) : ''
  const { buttonVoteUp, buttonVoteDown, comments } = buttons

  return (
    <Paper className='card-content' elevation={1}>

      <div className='card-content-title'>
        <Typography variant='h5' component='h3' onClick={event => onclick(ROUTES.NAVIGATE, card.id)}>
          <span className='card-title-link'>{card.title}</span>
        </Typography>
        <span className='card-content-title-button'>
          <Menu button={menuDots.button} items={menuDots.items} selectOnClick={onclick} cardId={card.id} />
        </span>
      </div>

      <span className='card-content-line' />

      <div>
        <Typography component='p'>
          {card.body}
        </Typography>
      </div>

      <span className='card-content-line' />

      <span style={{ 'textAlign': 'end' }}>
        <Typography component='p'>
              Postado por <b>{card.author}</b> em <i>{date.toLocaleString()}</i> - <b>{loadsh.startCase(card.category)}</b>
        </Typography>
      </span>

      <div className='card-content-iten-footer'>
        <div>
          <Typography component='p'>
            <Button onclick={onclick} button={buttonVoteUp} data={card.id} />
            <span style={{ margin: '0% 5%' }}>{card.voteScore}</span>
            <Button onclick={onclick} button={buttonVoteDown} data={card.id} />
          </Typography>
        </div>

        <div className='card-content-iten-footer button-comments'>
          <Button onclick={onclick} button={comments} data={card.id} name={card.commentCount} />
        </div>
      </div>

    </Paper>
  )
}
