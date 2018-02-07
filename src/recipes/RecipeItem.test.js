import React from 'react'
import { shallow } from 'enzyme'
import RecipeItem from './RecipeItem'
import Pescatarian from '../images/pescatarian.svg'
import Vegetarian from '../images/vegetarian.svg'
import Vegan from '../images/vegan.svg'

const recipe1 = {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
}

const recipe2 = {
  title: 'Paella',
  summary: 'This is the dramatic seafood paella that looks stunning, with crustaceans and shellfish. You can vary the quantities of seafood and also use crab, crayfish, etc.',
  vegan: false,
  vegetarian: false,
  pescatarian: true,
}

const recipe3 = {
  title: 'Agedashi Tofu',
  summary: 'Agedashi Tofu is one of those magical dishes where a few simple ingredients come together in a harmonizing synergy that elevates the dish from humble to divine. It is made with blocks of soft tofu that are coated in a thin layer of potato starch before being lightly fried.',
  vegan: true,
  vegetarian: true,
  pescatarian: false,
}

describe('<RecipeItem />', () => {
  const container = shallow(<RecipeItem { ...recipe1 } />)

  it('is wrapped in an article tag with class name "recipe"', () => {
    expect(container).toHaveTagName('article')
    expect(container).toHaveClassName('recipe')
  })

  it('contains the title', () => {
    expect(container.find('h1')).toHaveText(recipe1.title)
  })

  it('shows a carrot  when it is vegetarian', () => {
    expect(container.find('ul > li > img')).toHaveProp('src', Vegetarian)
  })

  describe('with a vegan recipe', () => {
    const container = shallow(<RecipeItem { ...recipe3 } />)

    it('shows corn when it is vegan', () => {
      expect(container.find('ul > li > img')).toHaveProp('src', Vegan)
    })
  })

  describe('with a fish recipe', () => {
    const container = shallow(<RecipeItem { ...recipe2 } />)

    it('shows a fish when it is pescatarian', () => {
      expect(container.find('ul > li > img')).toHaveProp('src', Pescatarian)
    })
  })
})
