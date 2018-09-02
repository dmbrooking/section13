import React from 'react'
import configureStore from 'redux-mock-store'

import LoginContainer from '../LoginContainer'

describe('Login Container', () => {
  const mockStore = configureStore()
  let store, wrapper

  beforeEach(() => {
    store = mockStore({ auth: { error: false, authenticated: false } })
    store.dispatch = jest.fn()
    wrapper = shallow(<LoginContainer store={store} />)
  })

  it('maps state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      error: false,
      authenticated: false,
      loginUser: expect.any(Function)
    }))
  })
})
