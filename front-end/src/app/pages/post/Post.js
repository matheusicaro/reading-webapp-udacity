import React, { Fragment } from 'react'

import { Card } from '../../components/card'
import NavBar from '../../components/NavBar'
import { Comments } from '../../components'
import { CARD_BUTTONS } from '../../constants/buttons'

const Post = (props) => {
  return (
    <Fragment>
      <div className='dashboard-container'>
        <NavBar />
        <Card
          card={props.post}
          onclick={props.onClicksPost}
          buttons={CARD_BUTTONS.footer}
          menuDots={CARD_BUTTONS.menuDots}
        />

        <Comments comments={props.comments} />

      </div>
    </Fragment>
  )
}

export default Post
