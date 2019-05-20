export const POST_TYPE_ACTION = {
  INITIAL_DATA: 'INITIAL_DATA_POST',
  CHANGE_VOTE: {
    upVote: 'upVote',
    downVote: 'downVote'
  },
  DELETE: 'DELETE',
  EDIT: 'EDIT',
  GET_BY_ID: 'GET_BY_ID',
  CREATE_NEW_POST: 'CREATE_NEW_POST',
  SEND_COMMENTER: 'SEND_COMMENTER',
  CREATE_COMMENT: 'CREATE_COMMENT',
  CATEGORIES: {
    INITIAL_DATA: 'INITIAL_DATA_CATEGORIES'
  },
  NAVIGATE: 'NAVIGATE',
  SELECT_ORDER_BY_OPTION: 'SELECT_ORDER_BY_OPTION'
}

const actionEditPost = payload => {
  return {
    type: POST_TYPE_ACTION.EDIT,
    payload
  }
}

const actionDeletePost = payload => {
  return {
    type: POST_TYPE_ACTION.DELETE,
    payload
  }
}

const actionCreatePost = newPost => {
  return {
    type: POST_TYPE_ACTION.CREATE_NEW_POST,
    payload: newPost
  }
}

const actionDownVote = post => {
  return {
    type: POST_TYPE_ACTION.CHANGE_VOTE.downVote,
    payload: {
      post
    }
  }
}

const actionUpVote = post => {
  return {
    type: POST_TYPE_ACTION.CHANGE_VOTE.upVote,
    payload: {
      post
    }
  }
}

const actionReceiveData = payload => {
  return {
    type: POST_TYPE_ACTION.INITIAL_DATA,
    payload
  }
}

const actionOrderByOption = payload => {
  return {
    type: POST_TYPE_ACTION.SELECT_ORDER_BY_OPTION,
    payload
  }
}

export {
  actionEditPost,
  actionDeletePost,
  actionDownVote,
  actionUpVote,
  actionReceiveData,
  actionCreatePost,
  actionOrderByOption
}
