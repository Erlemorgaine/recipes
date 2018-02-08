import React, { PureComponent } from 'react';
import RecipesContainer from './recipes/RecipesContainer'

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
        <RecipesContainer
          onChange={this.updateRecipe.bind(this)}
          //updateRecipe={}
        />
      </div>
    )
  }
}

export default App
