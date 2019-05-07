import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { ButtonGeneric as Button, MenuGeneric as Menu } from '..'
import loadsh from 'lodash'

import './style.css'

export const Card = ({ card, onclick, menuDots, buttons }) => {
  const date = new Date(card.timestamp)
  const { buttonVoteUp, buttonVoteDown } = buttons
  return (
    <Paper className='card-content' elevation={1}>
      <div className='card-content-title'>
        <Typography variant='h5' component='h3'>
          {card.title}
        </Typography>
        <span className='card-content-title-button'>
          <Menu button={menuDots.button} items={menuDots.items} selectOnClick={onclick} />
        </span>
      </div>
      <span className='card-content-line' />
      <div>
        <Typography component='p'>
          {card.body}
        </Typography>
      </div>

      <span className='card-content-line' />

      <div className='card-content-iten-footer'>
        <div>
          <Typography component='p'>
            <Button onclick={onclick} data={{ button: buttonVoteUp, optionalContent: card.id }} />
            <span style={{ margin: '0% 5%' }}>{card.voteScore}</span>
            <Button onclick={onclick} data={{ button: buttonVoteDown, optionalContent: card.id }} />
          </Typography>
        </div>

        <div>
          <span style={{ 'textAlign': 'end' }}>
            <Typography component='p'>
              Postado por <b>{loadsh.startCase(card.author)}</b> em <i>{date.toLocaleString()}</i> - <b>{loadsh.startCase(card.category)}</b>
            </Typography>
          </span>
        </div>
      </div>

    </Paper>
  )
}
