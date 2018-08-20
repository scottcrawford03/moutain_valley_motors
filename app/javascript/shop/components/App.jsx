import React from 'react'
import NavBar from '../../shared/components/nav_bar'

export default class App extends React.Component {
  state = {
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="body_content">
          SHOP FOR SWEET STUFF
          <br/>
          <a href="/shop/1"> SWEET CAR HERE</a>
        </div>
      </div>
    )
  }
}
