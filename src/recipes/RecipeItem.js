import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Pescatarian from '../images/pescatarian.svg'
import Vegetarian from '../images/vegetarian.svg'
import Vegan from '../images/vegan.svg'
import LikeButton from '../components/LikeButton'
import { Link } from 'react-router-dom'

class RecipeItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    liked: PropTypes.bool,
    photo: PropTypes.string,
    //updateRecipe:
  }

  onChange = () => {
    this.props.onChange(this.props._id)
  }

  // toggleLike = () => {
  //  const { updateRecipe, _id, liked } = this.props
  //  updateRecipe(_id, { liked: !liked })
  // }

  render() {
    const { _id, title, summary, vegan, vegetarian, pescatarian, liked, photo } = this.props
    return(
      <article className="recipe">
        <h1>{ title }</h1>
        <div>
          <img className="recipe-image" src={ photo } alt="recipe"/>
          <p>{ summary }</p>
          <ul>
            { vegan && <li><img src={Vegan} alt="vegan" /></li> }
            { !vegan && vegetarian && <li><img src={Vegetarian} alt="vegetarian" /></li> }
            { pescatarian && <li><img src={Pescatarian} alt="pescatarian" /></li> }
          </ul>
          <div>
            <LikeButton
              liked={ liked }
              onChange={this.onChange}
            />
          </div>
          <Link to={'recipes/' + _id}>View recipe</Link>
        </div>
      </article>
    )
  }
}

export default RecipeItem
