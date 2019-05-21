import { POST_TYPE_ACTION } from '../../services/actions/post'
import { SortBy, parseObjectToArrayList } from '../../utils'

export const posts = (state = null, action) => {
  let newState = {}

  switch (action.type) {
    case POST_TYPE_ACTION.INITIAL_DATA:
      // [input]  action.payload : { { id:'xxx', name:'xxx', ... }, ... }
      // [output] newState : [ { id: { id:'xxx', name:'xxx', ... } }, ... ]
      newState = parseObjectToArrayList(action.payload)
      return newState

    case POST_TYPE_ACTION.CREATE_NEW_POST:
      const newData = action.payload
      newState = addNewDataInState(state, newData)
      return newState

    case POST_TYPE_ACTION.CHANGE_VOTE[action.type]:
      const { comment } = action.payload
      if (comment) {
        return state
      } else {
        newState = updateChageInState(state, action.payload.post)
        return newState
      }

    case POST_TYPE_ACTION.DELETE:
      const dataToBeDelete = action.payload
      newState = deleteInState(state, dataToBeDelete)
      return newState

    case POST_TYPE_ACTION.EDIT:
      const dataUpdeted = action.payload
      newState = updateChageInState(state, dataUpdeted)
      return newState

    case POST_TYPE_ACTION.SELECT_ORDER_BY_OPTION:
      const option = action.payload
      newState = SortBy.filter(option, state)
      return newState

    default:
      return state
  }
}

const addNewDataInState = (state, newData) => {
  const newState = state.map(value => value)
  newState.push({ [newData.id]: newData })
  return newState
}

const deleteInState = (oldState, idPost) => {
  const newPosts = oldState.filter(existPostWith => !(existPostWith[idPost]))
  return newPosts
}

const updateChageInState = (oldState, updatedPost) => {
  const id = updatedPost.id
  let positionOldPost = ''
  const newPost = { [id]: updatedPost }

  const newState = oldState.filter((existPostWith, index) => {
    if (existPostWith[id]) {
      positionOldPost = index
      return false
    } else { return true }
  })

  newState.splice(positionOldPost, 0, newPost)
  return newState
}
