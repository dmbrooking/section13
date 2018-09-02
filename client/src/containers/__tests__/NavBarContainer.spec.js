import React from 'react'
import configureStore from 'redux-mock-store'

import NavBarContainer from '../NavBarContainer'

describe('NavBar Container', () => {
  const mockStore = configureStore()
  let store, wrapper

  beforeEach(() => {
    store = mockStore({ auth: { authenticated: false } })
    store.dispatch = jest.fn()
    wrapper = shallow(<NavBarContainer store={store} />)
  })

  it('maps state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      authenticated: false,
      logoutUser: expect.any(Function)
    }))
  })
})
