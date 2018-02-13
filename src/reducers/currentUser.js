import { USER_SIGNED_IN } from '../actions/users/sign-in'
import { USER_SIGNED_OUT } from '../actions/users/sign-out'

export default (state = [], { type, payload } = {}) => {
  switch(type) {

    case USER_SIGNED_IN :
      return payload

      case USER_SIGNED_OUT :
        return payload

    default :
      return state
  }
}
