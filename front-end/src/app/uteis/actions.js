export const dispatchApi = (dispatch, call, action, data) => {
  // dispatch(showLoading())  INSERIR PAGINA DE LOADING AQUI QUANDO INICIAR UMA REQUISIÇÃO ASSINCRONA

  return call(data).then(response => {
    dispatch(action(response))
    // dispatch(hideLoading())    INSERIR PAGINA DE LOADING AQUI QUANDO INICIAR UMA REQUISIÇÃO ASSINCRONA
  }).catch(error => {
    window.alert('ERROR NO CONSOLE')
    console.log(error)
  })
}
