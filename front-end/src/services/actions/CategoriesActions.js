import { CATEGORIES } from '../../app/constants/actions'
import { CategoriesApi } from '../api'
import { DispatchUteis } from '../../utils'

const receiveDataAction = payload => {
  return {
    type: CATEGORIES.INITIAL_DATA,
    payload
  }
}

const initialData = dispatch => {
  return DispatchUteis.withReturnApi(dispatch, CategoriesApi.initialData, receiveDataAction)
}

export const Categories = {
  initialData
}
