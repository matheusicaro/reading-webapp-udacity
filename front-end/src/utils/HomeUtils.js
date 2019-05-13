import lodash from 'lodash'
import { FILTER } from '../app/constants'

const applyingFilter = (filter, posts) => {
  if (filter === FILTER.Date) return sortPostsByDate(posts)
  else if (filter === FILTER.Bigger_Score) return sortPostsByBiggerScore(posts)
  else if (filter === FILTER.Smaller_Score) return sortPostsBymallerScore(posts)
}

const applyingFilterByCategories = () => {

}

export const HomeUtils = {
  applyingFilter,
  applyingFilterByCategories

}

// const getPostsByCategories = (categories, posts) => {
//   let filters = []
//   lodash.forIn(categories, (value, key) => { if (value === true) filters.push(key) })
//   const newPosts = lodash.values(posts).filter(post => filters.includes(post.category))
//   return { ...newPosts }
// }

// TODO: SAVE FUNCTIONS
const sortPostsByDate = (posts) => lodash.values(posts).sort(compareByTimeStamp)
const sortPostsByBiggerScore = (posts) => lodash.values(posts).sort(compareByBiggerScore)
const sortPostsBymallerScore = (posts) => lodash.values(posts).sort(compareBySmallerScore)

const compareByTimeStamp = (a, b) => {
  if (a.timestamp < b.timestamp) { return -1 }
  if (a.timestamp > b.timestamp) { return 1 }
  return 0
}

const compareByBiggerScore = (a, b) => {
  if (a.voteScore > b.voteScore) { return -1 }
  if (a.voteScore < b.voteScore) { return 1 }
  return 0
}

const compareBySmallerScore = (a, b) => {
  if (a.voteScore < b.voteScore) { return -1 }
  if (a.voteScore > b.voteScore) { return 1 }
  return 0
}
