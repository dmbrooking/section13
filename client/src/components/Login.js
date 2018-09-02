import React from 'react'
import { Redirect } from 'react-router'
import {
  Container, Row, Col, Button, Form, FormGroup,
  Label, Input, Card, CardTitle, CardBody
} from 'reactstrap'

import '../styles.css'
import background from '../assets/background.jpg'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  updateEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  updatePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = (event) => {
    const { loginUser } = this.props

    event.preventDefault()
    loginUser(this.state.email, this.state.password)
  };

  render () {
    if (this.props.authenticated) return <Redirect to='/' />

    return (
      <Container className='vertical-center'>
        <img className='bg' src={background} alt='background' />
        <Row className='justify-content-sm-center'>
          <Col sm='8' md='7' lg='6' className='align-self-center'>
            <Card>
              <CardBody>
                <CardTitle className='text-center'>
                  <div>
                    <h4>Section 13</h4>
                  </div>
                </CardTitle>
                <br />
                <Form data-testid='loginForm' onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for='emailInput'>Email</Label>
                    <Input
                      type='email'
                      name='email'
                      id='emailInput'
                      placeholder='Enter your email address'
                      value={this.state.email}
                      onChange={this.updateEmail}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for='passwordInput'>Password</Label>
                    <Input
                      type='password'
                      name='password'
                      id='passwordInput'
                      placeholder='Enter your password'
                      value={this.state.password}
                      onChange={this.updatePassword}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button type='submit' className='button button--blue'>
                      Log In
                    </Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Login
