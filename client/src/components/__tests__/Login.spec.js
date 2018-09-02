import React from 'react'
import configureStore from 'redux-mock-store'

import Login from '../Login'

describe('<Login />', () => {
  const mockStore = configureStore()
  const loginUser = jest.fn()
  let store, wrapper

  beforeEach(() => {
    store = mockStore({ auth: { authenticated: false } })
    wrapper = shallow(<Login store={store} loginUser={loginUser} />)
  })

  it('matches saved snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('calls loginUser action when form is submitted', () => {
    wrapper.find('[data-testid="loginForm"]').simulate('submit', { preventDefault: () => { } })
    expect(loginUser).toHaveBeenCalledTimes(1)
  })
})
