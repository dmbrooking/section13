import React from 'react'

import Routes from '../Routes'

describe('<Routes />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Routes />)
  })

  it('matches saved snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
