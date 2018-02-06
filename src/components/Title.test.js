import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

describe('<Title />', () => {
  const title = shallow(<Title content="Booo" />)

  it('has a wrapping h1 tag', () => {
    expect(title).toHaveTagName('h1')
  })
  it('renders the content', () => {
    expect(title).toHaveText('Booo')
  })
  
  describe('with a different content prop', () => {

    const title = shallow(<Title content="Sth else" />)
    it('renders a differnet title text', () => {
      expect(title).toHaveText('Sth else')
    })
  })
})
