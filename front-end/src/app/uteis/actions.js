export const dispatchApi = (dispatch, call, action) => {
  // dispatch(showLoading())  INSERIR PAGINA DE LOADING AQUI QUANDO INICIAR UMA REQUISIÇÃO ASSINCRONA

  return call().then(response => {
    dispatch(action(response))
    // dispatch(hideLoading())    INSERIR PAGINA DE LOADING AQUI QUANDO INICIAR UMA REQUISIÇÃO ASSINCRONA
  })
}
