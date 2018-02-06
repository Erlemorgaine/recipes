import React from 'react'
import { shallow } from 'enzyme'
import RecipesContainer from './RecipesContainer'
import Title from '../components/Title'

describe('<RecipesContainer />', () => {
  const container = shallow(<RecipesContainer recipes={[]} />)

  it('is wrapped in a div with class name "recipes"', () => {
    expect(container).toHaveClassName('wrapper')
    expect(container).toHaveClassName('recipes')
  })

  it('sets the Title to "All Recipes"', () => {
    expect(container).toContainReact(<Title content="All Recipes" />)
  })
})
