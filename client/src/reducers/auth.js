import * as types from '../constants/ActionTypes'

const INITIAL_STATE = {
  error: '',
  authenticated: false
}

export default function authReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, error: '', authenticated: true, user: action.user }
    case types.LOGIN_SUCCESS:
      return { ...state, error: '', authenticated: true }
    case types.LOGOUT:
      return { ...state, authenticated: false }
    case types.LOGIN_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
