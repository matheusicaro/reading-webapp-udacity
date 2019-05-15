import lodash from 'lodash'
import { CARD_BUTTON as POST } from '../app/constants/actions'

export const getPostId = (posts, id) => {
  const post = { ...lodash.valuesIn(posts).filter(post => post.id === id) }
  return post[0]
}

export const updateState = (action, oldPost, data) => {
  const newPost = oldPost
  if (action === POST.CHANGE_VOTE.upVote) {
    newPost.voteScore += 1
    return newPost
  } else if (action === POST.CHANGE_VOTE.downVote) {
    newPost.voteScore -= 1
    return newPost
  } else if (action === POST.EDIT) {
    newPost.body = data.body
    newPost.title = data.title
    return newPost
  }
}

export const PostUtils = {
  getPostId,
  updateState
}
