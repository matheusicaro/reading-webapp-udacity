const withReturnApi = (dispatch, call, action, data) => {
  // dispatch(showLoading())  INSERIR PAGINA DE LOADING AQUI QUANDO INICIAR UMA REQUISIÇÃO ASSINCRONA
  return call(data)
    .then(response => {
      dispatch(action(response))
      // dispatch(hideLoading())    INSERIR PAGINA DE LOADING AQUI QUANDO INICIAR UMA REQUISIÇÃO ASSINCRONA
    })
    .catch(error => {
      if (error) {
        window.alert('*** ERROR *** - CALL API: Open console of browser and verify Api Server.')
        console.log('*** ERROR *** - CALL API: Api Server not found')
        console.log('------>')
        console.log(error)
        console.log('<------')
      }
    })
}

const withoutReturnApi = (
  dispatch,
  call,
  action,
  data,
  returnData
) => {
  return call(data)
    .then(() => {
      dispatch(action(returnData ? data : null))
    })
    .catch(error => {
      window.alert('*** ERROR *** - CALL API: Open console of browser and verify Api Server.')
      console.log('*** ERROR *** - CALL API: Api Server not found')
      console.log('------>')
      console.log(error)
      console.log('<------')
    })
}

export const initialDate = {}

export const DispatchUteis = {
  withReturnApi,
  withoutReturnApi,
  initialDate
}
