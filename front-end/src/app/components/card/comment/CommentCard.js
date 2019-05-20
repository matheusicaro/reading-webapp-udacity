import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'

import ScoresButton from '../../buttons/ScoresButton'

import { MenuOpenByClickInButton as Menu } from '../../menus'
import { CARD_COMMENT_BUTTONS } from '../../../constants/buttons'

import '../style.css'

const CommentCard = ({ card, onclick, menuDots, buttons, disableButtonComment = false }) => {
  const cardDate = new Date(card.timestamp)

  return (
    <Paper className='card-container' elevation={1}>

      <div className='title'>
        <span >
          <Typography component='p'>
          Commented by <b>{card.author}</b> in <i>{cardDate.toLocaleString()}</i>
          </Typography>
        </span>
        <span className='title-button'>
          <Menu
            button={CARD_COMMENT_BUTTONS.menu.button}
            items={CARD_COMMENT_BUTTONS.menu.items}
            selectOnClick={onclick}
            cardId={card.id} />
        </span>
      </div>

      <span className='content-line' />

      <div>
        <Typography component='p'>
          {card.body}
        </Typography>
      </div>

      <span className='content-line' />

      <div className='footer'>
        <div>
          <ScoresButton onclick={onclick} id={card.id} text={card.voteScore} />
        </div>

        { disableButtonComment
          ? ''
          : <div className='footer button-comment'>
            <Typography component='p'>
              <span style={{ margin: '0 15%' }}>{card.commentCount}</span>
              <SvgIcon>
                <path d={CARD_COMMENT_BUTTONS.footer.comments.icon} />
              </SvgIcon>
            </Typography>
          </div>
        }
      </div>

    </Paper>
  )
}

export default CommentCard
