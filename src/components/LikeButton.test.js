import React from 'react'
import { shallow } from 'enzyme'
import LikeButton from './LikeButton'
import sinon from 'sinon'

describe('<LikeButton />', () => {
  const toggleLike = sinon.spy()
  const button = shallow(<LikeButton liked={false} onChange={toggleLike}/>)

  it('is wrapped in a paragraph with class "like"', () => {
    expect(button).toHaveTagName('p')
    expect(button).toHaveClassName('like')
  })

  describe('click it', () => {
    it('calls "onChange"', () => {
      button.find('button').simulate('click')
      expect(toggleLike.callCount).toBe(1)
    })
  })
})
