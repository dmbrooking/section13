import axios from 'axios'
import * as types from '../constants/ActionTypes'
import { ROOT_API_URL } from '../constants/Constants'

export function authError (error) {
  return {
    type: types.LOGIN_ERROR,
    payload: error
  }
}

export function logoutUser () {
  localStorage.removeItem('token')
  return {
    type: types.LOGOUT
  }
}

export function loginUser (email, password) {
  return (dispatch) => {
    axios.post(`${ROOT_API_URL}/login`, { email, password })
      .then((response) => {
        dispatch({ type: types.LOGIN_SUCCESS, user: response.data.user })
        localStorage.setItem('token', response.data.auth_token)
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'))
      })
  }
}
