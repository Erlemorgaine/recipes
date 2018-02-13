export const UPDATE_LIKE = 'UPDATE_LIKE'

export default (updatedRecipe) => {
  return {
    type: UPDATE_LIKE,
    payload: updatedRecipe
  }
}
