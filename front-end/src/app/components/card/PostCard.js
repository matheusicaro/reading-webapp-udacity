import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { ButtonGeneric as Button } from '..'
import { MenuCard as Menu } from '.'
import { ROUTES } from '../../constants'

import loadsh from 'lodash'

import './style.css'

export const PostCard = props => {
  const { card, onclick, menuDots, buttons } = props
  const { disableTitleNavigation = false, disableButtonComment = false } = props

  const date = card && card.timestamp ? new Date(card.timestamp) : ''
  const { buttonVoteUp, buttonVoteDown, comments } = buttons

  const getTitleNavigate = () => (
    <span
      className='post-card-title-link'
      onClick={event => onclick(ROUTES.NAVIGATE, card.id)}
    >{ card.title }</span>
  )

  return (
    <Paper className='post-card-content' elevation={1}>

      <div className='post-card-content-title'>
        <Typography variant='h5' component='h3' >

          { disableTitleNavigation
            ? <span>{card.title}</span>
            : getTitleNavigate()
          }

        </Typography>
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

      <span style={{ 'textAlign': 'end' }}>
        <Typography component='p'>
              Postado por <b>{card.author}</b> em <i>{date.toLocaleString()}</i> - <b>{loadsh.startCase(card.category)}</b>
        </Typography>
      </span>

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
