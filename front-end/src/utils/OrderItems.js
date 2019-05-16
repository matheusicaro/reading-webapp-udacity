import lodash from 'lodash'

// TODO: SAVE FUNCTIONS
const Date = (object) => lodash.values(object).sort(compareByTimeStamp)
const BiggerScore = (object) => lodash.values(object).sort(compareByBiggerScore)
const mallerScore = (object) => lodash.values(object).sort(compareBySmallerScore)

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

export const SortBy = {
  Date,
  BiggerScore,
  mallerScore
}
