import React from 'react'
import NavBar from '../../shared/components/nav_bar'

export default class App extends React.Component {
  state = {
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }

  handleClick(event, url) {
    event.preventDefault();
    window.location.replace(url)
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="body_content">
          SHOP FOR SWEET STUFF
          <br/>
          <a href="" onClick={(evt)=>this.handleClick(evt, "/shop/1")}> SWEET CAR HERE</a>
        </div>
      </div>
    )
  }
}
