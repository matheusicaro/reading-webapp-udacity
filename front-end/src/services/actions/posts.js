import { POSTS } from '../../app/uteis/constants/actions'
import { InitialData as getInitialData } from '../../app/api'
import { dispatchApi } from '../../app/uteis'

const receiveData = payload => {
  return {
    type: POSTS.INITIAL_DATA,
    payload
  }
}

const upVote = payload => {
  return {
    type: POSTS.CHANGE_VOTE.UP_VOTE,
    payload
  }
}

const downVote = payload => {
  return {
    type: POSTS.CHANGE_VOTE.DOWN_VOTE,
    payload
  }
}

const initialData = dispatch => {
  return dispatchApi(dispatch, getInitialData, receiveData)
}

const changeUpVote = dispatch => {
  console.log('changeUpVote', upVote)
  // return dispatchApi(dispatch, getInitialData, changeVoteUpOrDown(action))
}

const changeDownVote = dispatch => {
  console.log('changeDownVote', downVote)
  // return dispatchApi(dispatch, getInitialData, changeVoteUpOrDown(action))
}

export const Post = {
  initialData,
  changeUpVote,
  changeDownVote
}
