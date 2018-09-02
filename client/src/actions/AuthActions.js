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
    axios.post(`${ROOT_API_URL}/user_token`, { auth: { email, password } })
      .then((response) => {
        dispatch({ type: types.LOGIN_SUCCESS })
        localStorage.setItem('token', response.data.jwt)
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'))
      })
  }
}
