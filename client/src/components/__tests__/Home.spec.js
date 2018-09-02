import React from 'react'

import Home from '../Home'

describe('<Home />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('matches saved snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
