import request from 'request-promise'

const InitialData = () => {
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
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

export default InitialData
