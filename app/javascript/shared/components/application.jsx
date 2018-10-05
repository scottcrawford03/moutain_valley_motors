import React from 'react'
import NavBar from './nav_bar'

export default class Application extends React.Component {
  state = {
  }
  handleLinkClick(url) {
    window.location.href = `${window.location.origin}${url}`
  }

  render() {
    return (
      <div className="application">
        <NavBar/>
        <div className="body_content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
