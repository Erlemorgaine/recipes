import { CREATE_RECIPE } from '../actions/recipes/create'
// import { UPDATE_LIKE } from '../actions/recipes/update'
import { FETCHED_RECIPES } from '../actions/recipes/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case CREATE_RECIPE :
      return [Object.assign({}, payload)].concat(state)

    // case UPDATE_LIKE :
    //   return state.map( (item, index) => {
    //     if(index !== index) {
    //       return item;
    //     }
    //     return {
    //       ...item,
    //       ...item
    //     }
    //   })

    case FETCHED_RECIPES :
      return payload;

    default :
      return state
  }
}
