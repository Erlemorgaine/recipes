import ApiClient from '../../api/client'

export const SIGN_UP = 'SIGN_UP'

const api = new ApiClient()

export default (newUser) => {
  return dispatch => {
    api.post('users', newUser)
      .then(res => dispatch(
        { type: SIGN_UP, payload: res.body }
      ))
  }
}
