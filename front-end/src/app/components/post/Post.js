import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { ButtonGeneric as Button, MenuGeneric as Menu } from '../'
import loadsh from 'lodash'
import { BUTTONS } from '../../uteis/constants/buttons'

import './style.css'

export const Post = ({ post, onclick }) => {
  const date = new Date(post.timestamp)

  return (
    <Paper className='post-content' elevation={1}>
      <div className='post-content-title'>
        <Typography variant='h5' component='h3'>
          {post.title}
        </Typography>
        <span className='post-content-title-button'>
          <Menu button={BUTTONS.MENU.MENU_DOTS} />
        </span>
      </div>
      <span className='post-content-line' />
      <div>
        <Typography component='p'>
          {post.body}
        </Typography>
      </div>

      <span className='post-content-line' />

      <div className='post-content-iten-footer'>
        <div>
          <Typography component='p'>
            <Button onclick={onclick} data={{ button: BUTTONS.POST.UP_VOTE, optionalContent: post.id }} />
            <span style={{ margin: '0% 5%' }}>{post.voteScore}</span>
            <Button onclick={onclick} data={{ button: BUTTONS.POST.DOWN_VOTE, optionalContent: post.id }} />
          </Typography>
        </div>

        <div>
          <span style={{ 'text-align': 'end' }}>
            <Typography component='p'>
              Postado por <b>{loadsh.startCase(post.author)}</b> em <i>{date.toLocaleString()}</i> - <b>{loadsh.startCase(post.category)}</b>
            </Typography>
          </span>
        </div>
      </div>

    </Paper>
  )
}
