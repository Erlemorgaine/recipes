import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './LikeButton.css'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
import RecipeItem from '../recipes/RecipeItem'

class LikeButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    liked: PropTypes.bool.isRequired
  }

  classNames() {
    const { liked } = this.props
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike() {
    this.props.onChange()
  }

  render() {
    const { liked } = this.props
    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
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

export default LikeButton