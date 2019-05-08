import lodash from 'lodash'
import { POST } from '../constants/actions'

export const updatePostsInState = (posts, action, postId) => {
  if (action === POST.CHANGE_VOTE.upVote) {
    lodash.forIn(posts, (value, key) => {
      if (value.id === postId) { posts[key].voteScore += 1 }
    })
  } else {
    lodash.forIn(posts, (value, key) => {
      if (value.id === postId) { posts[key].voteScore -= 1 }
    })
  }
}

export const deletePostInState = (posts, id) => {
  const newPosts = lodash.valuesIn(posts).filter(post => post.id !== id)
  return { ...newPosts }
}
