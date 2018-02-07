import React, { PureComponent } from 'react'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'

class RecipesContainer extends PureComponent {
  // static propTypes = {
  //   recipes:
  //   updateRecipe:
  // }
  changeLike = (id) => {
    this.props.onChange(id)
  }
  renderRecipe(recipe, index) {
   return <RecipeItem key={index} {...recipe} onChange={this.changeLike}/>
  }
  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="All Recipes" />
        </header>
        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

export default RecipesContainer
