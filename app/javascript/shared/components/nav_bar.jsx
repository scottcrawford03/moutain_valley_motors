import React from 'react'

export default class NavBar extends React.Component {
  state = {
  }
  handleLinkClick(url) {
    window.location.href = `http://localhost:3000${url}`
  }

  render() {
    return (
      <div className='nav_bar'>
        <a className='shop' onClick={this.handleLinkClick.bind(this, '/shop')}>
          Shop
        </a>
        <a className='title' onClick={this.handleLinkClick.bind(this, '/')}>
          <div className='company_name'>Mountain Valley Motors</div>
        </a>
        <a className='about_us' onClick={this.handleLinkClick.bind(this, '/about_us')}>
          About Us
        </a>
      </div>
    )
  }
}
