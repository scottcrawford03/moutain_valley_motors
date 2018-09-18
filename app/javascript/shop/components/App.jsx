import React from 'react'
import NavBar from '../../shared/components/nav_bar'
import AllListing from './all_listing'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listings: this.props.listings
    }
  }

  componentDidMount() {}
  componentWillUnmount() {}

  handleClick(event, url) {
    event.preventDefault();
    window.location.replace(url)
  }

  render() {
    const {listings} = this.state

    return (
      <div>
        <NavBar/>
        <div className="body_content">
          <div className="all_listings">
            {listings.map((listing) => {
              return(
                <AllListing
                  data={listing.data}
                  photos={listing.photos}
                />
              )
            })}
            {listings.map((listing) => {
              return(
                <AllListing
                  data={listing.data}
                  photos={listing.photos}
                />
              )
            })}
            {listings.map((listing) => {
              return(
                <AllListing
                  data={listing.data}
                  photos={listing.photos}
                />
              )
            })}
            {listings.map((listing) => {
              return(
                <AllListing
                  data={listing.data}
                  photos={listing.photos}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
