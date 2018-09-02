import * as actions from '../AuthActions'
import * as types from '../../constants/ActionTypes'

describe('Auth Actions', () => {
  it('should create an action to indicate an authentication error', () => {
    const payload = 'There was an error'
    const expectedAction = {
      type: types.LOGIN_ERROR,
      payload
    }
    expect(actions.authError(payload)).toEqual(expectedAction)
  })

  it('should create an action to log out the user', () => {
    const expectedAction = {
      type: types.LOGOUT
    }
    expect(actions.logoutUser()).toEqual(expectedAction)
  })
})
