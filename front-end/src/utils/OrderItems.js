import { values, forIn as forEachInObject } from 'lodash'
import { parseObjectToArrayList } from '../services/reducers/PostsReducer'

const Date = (object) => values(object).sort(compareByTimeStamp)
const BiggerScore = (object) => values(object).sort(compareByBiggerScore)
const mallerScore = (object) => values(object).sort(compareBySmallerScore)
// const category = (category, object) => values(object).filter(value => value.category === category)
const category = (category, object) => {
  let newObject = []
  object.map(value => forEachInObject(value, valuesOfPost => newObject.push(valuesOfPost)))
  newObject = parseObjectToArrayList(newObject.filter(post => post.category === category))
  return newObject
}

const compareByTimeStamp = (a, b) => {
  if (a.timestamp > b.timestamp) { return -1 }
  if (a.timestamp < b.timestamp) { return 1 }
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

export const SortBy = {
  Date,
  BiggerScore,
  mallerScore,
  category
}

export const parseDataPropsToState = (posts) => {
  const newPosts = []
  values(posts).map(value => newPosts.push(value))
  return newPosts
}
