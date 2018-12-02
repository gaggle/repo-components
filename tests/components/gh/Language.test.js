import React from 'react'
import { shallow } from 'enzyme'

import Language from '../../../src/components/gh/Language'

describe('Language', () => {
  it('should have .color element with JavaScript color', () => {
    const comp = shallow(<Language language="JavaScript"/>)
    expect(comp.exists('.color')).toBe(true)
    expect(comp.find('.color').prop('style')).toHaveProperty('color', '#f1e05a')
  })

  it('should have .text element', () => {
    const comp = shallow(<Language language="JavaScript"/>)
    expect(comp.exists('.text')).toBe(true)
    expect(comp.find('.text').text()).toEqual('.Js')
  })

  it('should capitalize text', () => {
    const comp = shallow(<Language language="Python"/>)
    expect(comp.find('.text').text()).toEqual('Python')
  })
})
