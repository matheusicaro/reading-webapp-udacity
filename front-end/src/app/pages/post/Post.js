import React, { Fragment } from 'react'

import { PostCard } from '../../components/card'
import NavBar from '../../components/NavBar'
import { Comments, Form } from '../../components'
import { CARD_BUTTONS } from '../../constants/buttons'

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
            buttons={CARD_BUTTONS.footer}
            menuDots={CARD_BUTTONS.menuDots}
          />

          <Form onclick={'SEND CLIC TO FORM'} />

          <Comments comments={props.comments} onclick={props.onClicksComment} />
        </div>

      </div>
    </Fragment>
  )
}

export default Post
