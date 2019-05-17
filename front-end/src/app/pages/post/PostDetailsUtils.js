import lodash from 'lodash'

import { CARD_BUTTON as ACTION_OF_BUTTON } from '../../constants/actions'

const getPostId = (posts, id) => {
  const post = { ...lodash.valuesIn(posts).filter(post => post.id === id) }
  return post[0]
}

const updateState = (action, oldPost, data) => {
  const newPost = oldPost
  if (action === ACTION_OF_BUTTON.CHANGE_VOTE.upVote) {
    newPost.voteScore += 1
    return newPost
  } else if (action === ACTION_OF_BUTTON.CHANGE_VOTE.downVote) {
    newPost.voteScore -= 1
    return newPost
  } else if (action === ACTION_OF_BUTTON.EDIT) {
    newPost.body = data.body
    newPost.title = data.title
    return newPost
  }
}

export default {
  getPostId,
  updateState
}
