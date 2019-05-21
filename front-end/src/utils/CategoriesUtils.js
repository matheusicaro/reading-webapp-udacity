import { forIn } from 'lodash'

const formartCategories = (categories) => {
  const parseData = []
  forIn(categories, (values, key) =>
    values.map(category => parseData.push({ ...category })
    ))
  return parseData
}

export const CategoriesUtils = {
  formartCategories
}

export const filters = {
  titleOptions: 'filter posts by:',
  Date: 'Date',
  BiggerScore: 'Bigger Score',
  SmallerScore: 'Smaller Score',
  values: ['Date', 'Bigger Score', 'Smaller Score']
}
