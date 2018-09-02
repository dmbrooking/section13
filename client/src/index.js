import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter, Router, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import History from './history'
import * as types from './constants/ActionTypes'
import reducers from './reducers'
import Routes from './components/Routes'

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(reduxThunk)
  )
)

const token = localStorage.getItem('token')

if (token) {
  store.dispatch({ type: types.LOGIN })
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router history={History}>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
