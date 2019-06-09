export const COMMENTS_TYPE_ACTION = {
  INITIAL_DATA: 'INITIAL_DATA_POST',
  CHANGE_VOTE: {
    upVote: 'upVote',
    downVote: 'downVote'
  },
  DELETE: 'DELETE',
  EDIT: 'EDIT_COMMENT',
  GET_BY_ID: 'GET_BY_ID',
  SEND_COMMENTER: 'SEND_COMMENTER',
  CREATE_COMMENT: 'CREATE_COMMENT',
  CATEGORIES: {
    INITIAL_DATA: 'INITIAL_DATA_CATEGORIES'
  }
}

const actionReceiveData = payload => {
  return {
    type: COMMENTS_TYPE_ACTION.GET_BY_ID,
    payload
  }
}

const actionDownVote = comment => {
  return {
    type: COMMENTS_TYPE_ACTION.CHANGE_VOTE.downVote,
    payload: {
      comment
    }
  }
}

const actionUpVote = comment => {
  return {
    type: COMMENTS_TYPE_ACTION.CHANGE_VOTE.upVote,
    payload: {
      comment
    }
  }
}

const actionDeleteComment = payload => {
  return {
    type: COMMENTS_TYPE_ACTION.DELETE,
    payload
  }
}

const actionEditComment = payload => {
  return {
    type: COMMENTS_TYPE_ACTION.EDIT,
    payload
  }
}

const actionCreateComment = payload => {
  return {
    type: COMMENTS_TYPE_ACTION.CREATE_COMMENT,
    payload
  }
}

export {
  actionReceiveData,
  actionDownVote,
  actionUpVote,
  actionDeleteComment,
  actionEditComment,
  actionCreateComment
}
