const withReturnApi = (dispatch, call, action, data) => {
  // dispatch(showLoading())  INSERIR PAGINA DE LOADING AQUI QUANDO INICIAR UMA REQUISIÇÃO ASSINCRONA

  return call(data)
    .then(response => {
      dispatch(action(response))
      // dispatch(hideLoading())    INSERIR PAGINA DE LOADING AQUI QUANDO INICIAR UMA REQUISIÇÃO ASSINCRONA
    })
    .catch(error => {
      window.alert('ERROR NO CONSOLE')
      console.log(error)
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
      window.alert('ERROR NO CONSOLE')
      console.log(error)
    })
}

export const DispatchUteis = {
  withReturnApi,
  withoutReturnApi
}
