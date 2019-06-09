import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'

import ScoresButton from '../../buttons/ScoresButton'

import { MenuOpenByClickInButton as Menu } from '../../menus'
import { CARD_COMMENT_BUTTONS } from '../../../constants/buttons'

import '../style.css'

const CommentCard = ({ card, onclick, disableButtonComment = false }) => {
  const [ body, setBody ] = useState(false)
  const [ date, setDate ] = useState(false)

  const cardDate = new Date(card.timestamp)

  const updateComment = (body, date) => {
    setDate(date)
    setBody(body)
  }

  return (
    <Paper className='card-container' elevation={1}>

      <div className='title'>
        <span >
          <Typography component='p'>
          Commented by <b>{card.author}</b> in <i>{ date || cardDate.toLocaleString()}</i>
          </Typography>
        </span>
        <span className='title-button'>
          <Menu
            button={CARD_COMMENT_BUTTONS.menu.button}
            items={CARD_COMMENT_BUTTONS.menu.items}
            selectOnClick={onclick}
            updateComment={updateComment}
            cardId={card.id}
            commentsPageCommentsSelected={card.body}
          />
        </span>
      </div>

      <span className='content-line' />

      <div>
        <Typography component='p'>
          { body || card.body}
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

CommentCard.propTypes = {
  card: PropTypes.object.isRequired,
  onclick: PropTypes.func.isRequired
}

export default CommentCard
