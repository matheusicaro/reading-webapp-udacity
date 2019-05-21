import { mapValues, forIn as forEachInObject, values as valuesOfObject } from 'lodash'
import { parseObjectToArrayList } from '../utils'

const orderObjectBycategory = (category, object) => {
  let newObject = []
  object.map(value => forEachInObject(value, valuesOfPost => newObject.push(valuesOfPost)))
  newObject = parseObjectToArrayList(newObject.filter(post => post.category === category))
  return newObject
}

export const sortCommentsByBigScore = (comments) => {
  if (isInvalid(comments)) { return [] }

  const newListOrdered = valuesOfObject(comments)
  return newListOrdered
}

export const FILTER_BY_DATE = 'Date'
export const FILTER_BY_BIGGER_SCORE = 'Bigger Score'
export const FILTER_BY_SMALLER_SCORE = 'Smaller Score'

const orderObjectByfilter = (option, object) => {
  if (isInvalid(object)) { return [] }

  const contentsOfTheObject = parseContentsObject(object)
  let newObject = {}

  if (option === FILTER_BY_DATE) {
    newObject = contentsOfTheObject.sort(compareByTimeStamp)
  } else if (option === FILTER_BY_BIGGER_SCORE) {
    newObject = contentsOfTheObject.sort(compareByBiggerScore)
  } else if (option === FILTER_BY_SMALLER_SCORE) {
    newObject = contentsOfTheObject.sort(compareBySmallerScore)
  }

  return newObject === {}
    ? window.alert(`OPTION NOT FOUD -> [${option}]`)
    : parseObjectToArrayList(newObject)
}

const parseContentsObject = (object) => {
  const contents = []
  object.map(objectValue => mapValues(objectValue, value => contents.push(value)))
  return contents
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

const isInvalid = (object) => {
  if (!object ||
    object === null ||
    object === undefined) { return true } else { return false }
}

export const SortBy = {
  filter: orderObjectByfilter,
  category: orderObjectBycategory
}
