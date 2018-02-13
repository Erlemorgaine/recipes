import ApiClient from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new ApiClient()

export default () => {
  return dispatch => {
    dispatch(APP_LOADING(true))

    api.get('/recipes')
      .then(res => dispatch({ type: FETCHED_RECIPES, payload: res.body }))
      .catch(err => dispatch(LOAD_ERROR(err)))

    dispatch(APP_LOADING(false)) 
  }
}
