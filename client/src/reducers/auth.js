import {
  LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT
} from '../actions/auth'

const INITIAL_STATE = {
  error: '',
  authenticated: false
}

export default function authReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, error: '', authenticated: true }
    case LOGIN_SUCCESS:
      return { ...state, error: '', authenticated: true }
    case LOGOUT:
      return { ...state, authenticated: false }
    case LOGIN_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
