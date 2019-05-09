import request from 'request-promise'

export const initialDataApi = () => {
  const url = process.env.REACT_APP_API_URL
  const authorization = process.env.REACT_APP_API_AUTHORIZATION

  const options = {
    uri: `${url}/posts`,
    headers: {
      'Authorization': authorization
    },
    json: true
  }

  return request.get(options)
    .then(response => response)
    .catch(error => `Error: ${error.message}`)
}

export const updateScoreApi = ({ action, postId }) => {
  const url = process.env.REACT_APP_API_URL
  const authorization = process.env.REACT_APP_API_AUTHORIZATION

  const options = {
    uri: `${url}/posts/${postId}`,
    headers: {
      'Authorization': authorization
    },
    body: {
      option: action
    },
    json: true
  }
  return request.post(options)
    .then(response => response)
    .catch(error => `Error: ${error.message}`)
}

export const deletePostApi = postId => {
  const url = process.env.REACT_APP_API_URL
  const authorization = process.env.REACT_APP_API_AUTHORIZATION
  const options = {
    uri: `${url}/posts/${postId}`,
    headers: {
      'Authorization': authorization
    }
  }

  return request.delete(options)
    .then(response => response)
    .catch(error => `Error: ${error.message}`)
}
