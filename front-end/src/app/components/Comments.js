import React, { Fragment } from 'react'
import lodash from 'lodash'
import { CommentCard } from '../components/card'
import { CARD_BUTTONS } from '../constants/buttons'
import Typography from '@material-ui/core/Typography'

export const Comments = props => {
  const comments = lodash.values(props.comments)

  return (
    <Fragment>

      <Typography variant='subtitle1' gutterBottom>
        Latest Comments ({comments.length}):
      </Typography>

      { comments.map((coment, index) => (
        <CommentCard
          key={index}
          card={coment}
          onclick={props.onclick}
          buttons={CARD_BUTTONS.footer}
          menuDots={CARD_BUTTONS.menuDots}

        />)
      )}
    </Fragment>
  )
}
