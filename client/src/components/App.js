import React from 'react'
import NavBar from '../containers/NavBarContainer'

class App extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div>
        <NavBar />
        <div className='container' style={{ marginTop: '50px' }}>
          <div className='row'>
            <div className='col-md-12'>
              { children }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
