import lodash from 'lodash'

const formartCategories = (categories) => {
  const parseData = []
  lodash.forIn(categories, (values, key) =>
    values.map(category => parseData.push({ ...category })
    ))
  return parseData
}

export const Categories = {
  formartCategories
}
