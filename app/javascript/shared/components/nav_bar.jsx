import React from 'react'

export default class NavBar extends React.Component {
  state = {
  }
  handleLinkClick(url) {
    window.location.href = `${window.location.origin}${url}`
  }

  render() {
    return (
      <div className='nav_bar'>
        <a className='title' onClick={this.handleLinkClick.bind(this, '/')}>
          <div className='company_logo'>
            <img src="https://mountainvalleymotors.nyc3.digitaloceanspaces.com/MountainValleyMotors_Logo_NoBackground.png" alt=""/>
          </div>
        </a>
        <a className='shop' onClick={this.handleLinkClick.bind(this, '/shop')}>
          Shop
        </a>
        <a className='about_us' onClick={this.handleLinkClick.bind(this, '/about_us')}>
          About Us
        </a>
      </div>
    )
  }
}
