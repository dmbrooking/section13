import { connect } from 'react-redux'
import { logoutUser } from '../actions/AuthActions'
import NavBar from '../components/NavBar'

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
