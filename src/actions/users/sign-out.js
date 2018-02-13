import ApiClient from '../../api/client'
import { push } from 'react-router-redux'

export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

const api = new ApiClient()

export default (user) => {
  return dispatch => {
    api.storeToken(null)
    dispatch({ type: USER_SIGNED_OUT, payload: null })
  }
}
