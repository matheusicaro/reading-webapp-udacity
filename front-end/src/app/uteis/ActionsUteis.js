export const dispatchApi = (dispatch, call, action, data, returnData) => {
  // dispatch(showLoading())  INSERIR PAGINA DE LOADING AQUI QUANDO INICIAR UMA REQUISIÇÃO ASSINCRONA

  return call(data).then(response => {
    dispatch(action(returnData ? data : response))
    // dispatch(hideLoading())    INSERIR PAGINA DE LOADING AQUI QUANDO INICIAR UMA REQUISIÇÃO ASSINCRONA
  }).catch(error => {
    window.alert('ERROR NO CONSOLE')
    console.log(error)
  })
}
