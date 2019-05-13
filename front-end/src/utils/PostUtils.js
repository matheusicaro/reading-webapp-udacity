import lodash from 'lodash'

export const getPostId = (posts, id) => {
  const post = { ...lodash.valuesIn(posts).filter(post => post.id === id) }
  return post[0]
}

export const PostUtils = {
  getPostId
}
