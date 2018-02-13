import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './LikeButton.css'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
import RecipeItem from '../recipes/RecipeItem'
import updateLike from '../actions/recipes/update'

class LikeButton extends PureComponent {
  static propTypes = {
    //dispatch: PropTypes.func.isRequired,
    liked: PropTypes.bool
  }

  classNames() {
    const { liked } = this.props
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike = () => {
    const { liked } = this.props
    this.setState({
      liked: !liked
    })
    this.props.updateLike(liked)
  }

  render() {
    const { liked } = this.props
    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike }>
          <img className="heart" src={ liked ? HeartRed : HeartGrey } alt="heart"/>
          <span className="copy">
            <img className="heart" src={ liked ? HeartRed : HeartGrey } alt="heart"/>
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null}</span>
      </p>
    )
  }
}

const mapStateToProps = (stateFromTheStore) => {
  return {
    recipes: stateFromTheStore.recipes
  }
}

export default connect(mapStateToProps, { updateLike })(LikeButton)
