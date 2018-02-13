import React, { PureComponent } from 'react'
import Routes from './routes'
import {withRouter} from 'react-router'
import RecipesContainer from './recipes/RecipesContainer'
import fetchRecipes from './actions/recipes/fetch'

class App extends PureComponent {

  updateRecipe(id) {
    this.setState({
      recipes: this.state.recipes.map( (recipe) => {
        if(recipe._id === id) {
          return { ...recipe, liked : !recipe.liked }
        }
        return {...recipe}
      })
    })
  }

  // updateRecipe(id, updates) {
  //   this.setState({
  //     recipes: this.state.recipes.map( (recipe) => {
  //       if(recipe._id === id) {
  //         return { ...recipe, ...updates }
  //       }
  //       return {...recipe}
  //     })
  //   })
  // }

  render() {
    return (
      <div className="app">
        <Routes />
      </div>
    )
  }
}

export default withRouter(App)
