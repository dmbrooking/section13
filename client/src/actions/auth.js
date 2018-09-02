import axios from 'axios'

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT'

const ROOT_URL = 'http://localhost:3000/api'

export const authError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error
  }
}

export const logoutUser = () => {
  localStorage.removeItem('token')
  return {
    type: LOGOUT
  }
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/user_token`, { auth: { email, password } })
      .then((response) => {
        dispatch({ type: LOGIN_SUCCESS })
        localStorage.setItem('token', response.data.jwt)
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'))
      })
  }
}
