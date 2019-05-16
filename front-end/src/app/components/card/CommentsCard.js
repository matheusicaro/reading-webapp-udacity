import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { ButtonGeneric as Button } from '..'
import { MenuCard as Menu } from '.'

import './style.css'

export const CommentCard = ({ card, onclick, menuDots, buttons, disableButtonComment = false }) => {
  const date = card && card.timestamp ? new Date(card.timestamp) : ''
  const { buttonVoteUp, buttonVoteDown, comments } = buttons

  return (
    <Paper className='post-card-content' elevation={1}>

      <div className='post-card-content-title'>
        <span >
          <Typography component='p'>
          Commented by <b>{card.author}</b> in <i>{date.toLocaleString()}</i>
          </Typography>
        </span>
        <span className='post-card-content-title-button'>
          <Menu button={menuDots.button} items={menuDots.items} selectOnClick={onclick} cardId={card.id} />
        </span>
      </div>

      <span className='post-card-content-line' />

      <div>
        <Typography component='p'>
          {card.body}
        </Typography>
      </div>

      <span className='post-card-content-line' />

      <div className='post-card-content-iten-footer'>
        <div>
          <Typography component='p'>
            <Button onclick={onclick} button={buttonVoteUp} data={card.id} />
            <span style={{ margin: '0% 5%' }}>{card.voteScore}</span>
            <Button onclick={onclick} button={buttonVoteDown} data={card.id} />
          </Typography>
        </div>

        { disableButtonComment
          ? ''
          : <div className='post-card-content-iten-footer button-comments'>
            <Button onclick={onclick} button={comments} data={card.id} name={card.commentCount} />
          </div>
        }
      </div>

    </Paper>
  )
}
