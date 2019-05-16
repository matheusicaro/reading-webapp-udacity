import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import { CommentCard } from '../components/card'
import { CARD_COMMENT } from '../constants/buttons'

import { SortBy } from '../../utils'

const Comments = props => {
  const comments = SortBy.BiggerScore(props.comments)

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
          buttons={CARD_COMMENT.footer}
          menuDots={CARD_COMMENT.menuDots}
          disableButtonComment
        />)
      )}

    </Fragment>
  )
}

const mapStateToProps = ({ comments }) => ({ comments })

export default connect(
  mapStateToProps,
  null
)(Comments)
