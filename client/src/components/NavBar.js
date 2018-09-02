import React from 'react'
import { connect } from 'react-redux'
import {
  Collapse, Nav, Navbar, NavbarBrand, NavbarToggler,
  NavItem, NavLink
} from 'reactstrap'

class NavBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleLogout = (event) => {
    const { logoutUser } = this.props
    logoutUser()
  };

  render () {
    if (!this.props.authenticated) return <div />

    return (
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Section 13</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink onClick={this.handleLogout} style={{ cursor: 'pointer' }}>Log Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(NavBar)
