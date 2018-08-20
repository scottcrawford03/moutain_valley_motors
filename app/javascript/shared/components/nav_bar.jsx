import React from 'react'

export default class NavBar extends React.Component {
  state = {
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render() {
    return (
      <div className='nav_bar'>
        <a className='shop' href='/shop'>
          Shop
        </a>
        <a className='title' href='/'>
          <div className='company_name'>Mountain Valley Motors</div>
        </a>
        <a className='about_us' href='/about_us'>
          About Us
        </a>
      </div>
    )
  }
}
