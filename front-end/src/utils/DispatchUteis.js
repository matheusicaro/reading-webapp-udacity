const withReturnApi = (dispatch, call, action, data) => {
  // dispatch(showLoading())  INSERIR PAGINA DE LOADING AQUI QUANDO INICIAR UMA REQUISIÇÃO ASSINCRONA

  return call(data)
    .then(response => {
      dispatch(action(response))
      // dispatch(hideLoading())    INSERIR PAGINA DE LOADING AQUI QUANDO INICIAR UMA REQUISIÇÃO ASSINCRONA
    })
    .catch(error => {
      // TODO: Erro lançando quando a API está desligada
      if (error) { console.log(error); window.alert('API DESLIGADA') }
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
      console.log('------>')
      console.log(error)
      console.log('<------')
    })
}

export const DispatchUteis = {
  withReturnApi,
  withoutReturnApi
}
