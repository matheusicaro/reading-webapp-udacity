import React, { Fragment } from 'react'

import { PostCard } from '../../components/card'
import NavBar from '../../components/NavBar'
import { Form } from '../../components'
import Comments from '../../components/Comments'

import { CARD_POST } from '../../constants/buttons'

import './post.css'

const Post = (props) => {
  return (
    <Fragment>
      <div className='post-container'>
        <NavBar />

        <div className='post-dashboard'>
          <PostCard
            card={props.post}
            onclick={props.onClicksPost}
            buttons={CARD_POST.footer}
            menuDots={CARD_POST.menuDots}
            disableTitleNavigation
            disableButtonComment
          />

          <Form onclick={props.onClickSendComment} />

          <Comments onclick={props.onClicksComment} />
        </div>

      </div>
    </Fragment>
  )
}

export default Post
