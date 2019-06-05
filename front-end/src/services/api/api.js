import request from 'request-promise'

const api = {
  url: 'http://localhost:3001',
  authorization: 'whatever-you-want'
}
export const requestApi = {
  get: (options) => request.get(options)
    .then(response => response)
    .catch(error => { throw error }),
  post: (options) => request.post(options)
    .then(response => response)
    .catch(error => { throw error }),
  delete: (options) => request.delete(options)
    .then(response => response)
    .catch(error => { throw error }),
  put: (options) => request.put(options)
    .then(response => response)
    .catch(error => { throw error })
}

export const options = (path, body, json) => {
  return {
    uri: api.url + path,
    headers: {
      'Authorization': api.authorization
    },
    body: (body) || '',
    json: (json) || ''
  }
}
