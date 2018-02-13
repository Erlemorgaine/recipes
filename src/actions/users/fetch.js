import ApiClient from '../../api/client'

export const FETCHED_USER = 'FETCHED_USER'

const api = new ApiClient()

export default () => {
  return dispatch => {
    //dispatch(APP_LOADING(true))

    api.get('users/me')
      .then(res => dispatch({ type: FETCHED_USER, payload: res.body }))
      //.catch(err => dispatch(LOAD_ERROR(err)))

    //dispatch(APP_LOADING(false))
  }
}
