import { connect } from 'react-redux'
import { loginUser } from '../actions/auth'
import Login from '../components/Login'

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
