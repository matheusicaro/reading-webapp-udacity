import lodash from 'lodash'

const getPostsByCategories = (categories, posts) => {
  let filters = []
  lodash.forIn(categories, (value, key) => { if (value === true) filters.push(key) })
  const newPosts = lodash.values(posts).filter(post => filters.includes(post.category))
  return { ...newPosts }
}

export const HomeUtils = {
  getPostsByCategories
}
