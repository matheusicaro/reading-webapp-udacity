export const aaadispatch = (dispatch, state) => ({
  [state]: dispatch(state.action)
})
