import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'

import { MenuOpenByClickInButton as Menu } from '../../menus'
import { CARD_POST_BUTTONS } from '../../../constants/buttons'
import { POST_TYPE_ACTION } from '../../../../services/actions/post'

import ScoresButton from '../../buttons/ScoresButton'

// TODO DELETAR COMPONENTE CommentButton
// import CommentButton from '../../buttons/CommentButton'

import '../style.css'

const PostCard = ({ onclick, card, cardDate, disableTitleNavigation, hideCommentIcone }) => {
  const getTitleNavigate = () => (
    <span
      className='post-card-title-link'
      onClick={event => onclick(POST_TYPE_ACTION.NAVIGATE, card.id)}
    >{ card.title }</span>
  )
  return (
    <Paper className='card-container' elevation={1}>

      <div className='title'>
        <div>
          <Typography variant='h5' component='h3' >
            { disableTitleNavigation
              ? <span>{card.title}</span>
              : getTitleNavigate()
            }
          </Typography>
        </div>

        <div className='title-button'>
          <Menu
            button={CARD_POST_BUTTONS.menu.button}
            items={CARD_POST_BUTTONS.menu.items}
            selectOnClick={onclick}
            cardId={card.id}
          />
        </div>
      </div>

      <span className='content-line' />

      <div>
        <Typography component='p'>
          {card.body}
        </Typography>
      </div>

      <span className='content-line' />

      <div style={{ 'textAlign': 'end' }}>
        <Typography component='p'>
          Posted by <b>{card.author}</b> in <i>{cardDate.toLocaleString()}</i> - <b>{card.category}</b>
        </Typography>
      </div>

      <div className='footer'>
        <div>
          <ScoresButton onclick={onclick} id={card.id} text={card.voteScore} />
        </div>

        { hideCommentIcone
          ? ''
          : <div className='footer button-comment'>
            <Typography component='p'>
              <span style={{ margin: '0 15%' }}>{card.commentCount}</span>
              <SvgIcon>
                <path d={CARD_POST_BUTTONS.footer.comments.icon} />
              </SvgIcon>
            </Typography>
          </div>
        }
      </div>

    </Paper>
  )
}

export default PostCard
