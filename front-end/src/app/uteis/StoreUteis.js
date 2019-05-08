export const dispatch = (dispatch, state) => ({
  [state]: dispatch(state.action)
})
