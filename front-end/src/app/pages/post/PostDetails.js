import React from 'react'
import PropTypes from 'prop-types'

import { PostCardContainer as PostCard } from '../../components/card'
import NavBar from '../../components/navbar/NavBar'
import { NewComentForm as CommentForm } from '../../components/forms/comments'
import { CommentsDashboard } from '../../components/dashboards'

import './postDetails.css'

const PostDetails = ({ post, onClicksPost, onClickSendComment, onClicksComment, hideCommentIcone }) => {
  return (
    <div className='post-container'>
      <NavBar />

      <div className='post-dashboard'>
        <PostCard
          card={post}
          onclick={onClicksPost}
          disableTitleNavigation
          hideCommentIcone
        />

        <CommentForm onclick={onClickSendComment} />

        <CommentsDashboard onclick={onClicksComment} />
      </div>
    </div>
  )
}

PostDetails.propTypes = {
  post: PropTypes.object.isRequired,
  onClicksPost: PropTypes.func.isRequired,
  onClickSendComment: PropTypes.func.isRequired,
  onClicksComment: PropTypes.func.isRequired
}

export default PostDetails
