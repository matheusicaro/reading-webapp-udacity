import { forIn } from 'lodash'

const formartCategories = (categories) => {
  console.log('categories', categories)
  const parseData = []
  forIn(categories, (values, key) =>
    values.map(category => parseData.push({ ...category })
    ))
  return parseData
}

export const CategoriesUtils = {
  formartCategories
}
