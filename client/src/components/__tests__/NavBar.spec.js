import React from 'react'
import configureStore from 'redux-mock-store'

import NavBar from '../NavBar'

describe('<NavBar />', () => {
  const mockStore = configureStore()
  let store, wrapper

  beforeEach(() => {
    store = mockStore({ auth: { authenticated: false } })
    wrapper = shallow(<NavBar store={store} />)
  })

  it('matches saved snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
