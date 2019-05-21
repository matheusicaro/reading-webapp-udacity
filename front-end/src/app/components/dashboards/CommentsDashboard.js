import React from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import { CommentCard } from '../card'

import { sortCommentsByBigScore } from '../../../utils'

const Comments = props => {
  const comments = sortCommentsByBigScore(props.comments)
  return (
    <div>

      <Typography
        variant='subtitle1'
        gutterBottom style={{ 'padding': '2%', 'borderBottom': '1px solid rgba(0, 0, 0, 0.42)' }}
      >
        Latest Comments ({comments.length}):
      </Typography>

      <div style={styleContainerList}>
        { comments.length > 0 && comments.map((coment, index) => (
          <CommentCard
            key={index}
            card={coment}
            onclick={props.onclick}
            disableButtonComment
          />)
        )}
      </div>

    </div>
  )
}

const mapStateToProps = ({ comments }) => ({ comments })

export default connect(
  mapStateToProps,
  null
)(Comments)

const styleContainerList = {
  'marginTop': '5%',
  'display': 'grid',
  'gridGap': '2%'
}
