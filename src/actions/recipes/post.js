import ApiClient from '../../api/client'

export const POST_RECIPE = 'POST_RECIPE'

const api = new ApiClient()

export default (newRecipe) => {
  return dispatch => {
    //dispatch(APP_LOADING(true))

    api.post('recipes', newRecipe)
      .then(res => dispatch({ type: POST_RECIPE, payload: res.body }))
      //.catch(err => dispatch(LOAD_ERROR(err)))

    //dispatch(APP_LOADING(false))
  }
}
