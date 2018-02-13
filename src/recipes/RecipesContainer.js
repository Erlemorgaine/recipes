import React, { PureComponent } from 'react'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import RecipeEditor from './RecipeEditor'
import fetchRecipes from '../actions/recipes/fetch'
import { connect } from 'react-redux'

class RecipesContainer extends PureComponent {
  // static propTypes = {
  //   recipes:
  //   updateRecipe:
  // }

  componentWillMount() {
    this.props.fetchRecipes()
  }

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
        <RecipeEditor />
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({
  recipes
})

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainer)
