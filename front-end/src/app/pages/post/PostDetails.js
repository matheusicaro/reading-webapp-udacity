import React from 'react'

import { PostCardContainer as PostCard } from '../../components/card'
import NavBar from '../../components/navbar/NavBar'
import { NewComentForm as CommentForm } from '../../components/forms/comments'
import { CommentsDashboard } from '../../components/dashboards'

import './postDetails.css'

const PostDetails = (props) => {
  return (
    <div className='post-container'>
      <NavBar />

      <div className='post-dashboard'>
        <PostCard
          card={props.post}
          onclick={props.onClicksPost}
          disableTitleNavigation
          disableButtonComment
        />

        <CommentForm onclick={props.onClickSendComment} />

        <CommentsDashboard onclick={props.onClicksComment} />
      </div>
    </div>
  )
}

export default PostDetails
