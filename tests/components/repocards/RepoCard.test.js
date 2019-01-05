import React from 'react'
import { mount } from 'enzyme'

import RepoCard from '../../../src/components/repocards/RepoCard'

describe('RepoCard', () => {
  it('should support linking to a details page', () => {
    const comp = mount(<RepoCard detailsLink={"foo"}/>)
    expect(comp.find('a').prop('href')).toEqual('/repos/foo')
  })

  it('should support linking to an external page', () => {
    const comp = mount(<RepoCard externalLink={"http://example.com"}/>)
    expect(comp.find('a').prop('href')).toEqual('http://example.com')
  })
})
