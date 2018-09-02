import React from 'react'
import configureStore from 'redux-mock-store'

import App from '../App'

describe('<App />', () => {
  const mockStore = configureStore()
  let store, wrapper

  beforeEach(() => {
    store = mockStore({})
    wrapper = shallow(<App store={store} />)
  })

  it('matches saved snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
