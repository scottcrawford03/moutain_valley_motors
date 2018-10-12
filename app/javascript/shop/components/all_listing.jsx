import React from 'react'
import Carousel from '../../shared/components/carousel'

export default class AllListing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data,
      photos: this.props.photos
    }
  }

  onListingClick() {
    const id = this.state.data.id
    const href = `${window.location.origin}/shop/${id}`

    window.location.href = href;
  }

  render() {
    const { id, year, make, model, trim, fuel, engine, transmission,
      drive_train, body_type, color, interior_color, interior_type,
      fuel_economy, sold, stock_number, mileage
    } = this.state.data

    const photos = this.state.photos

    return (
      <div className="all_listings_listing" key={id}>
        <div>
          <Carousel
            photos={photos}
            showButton={true}
          />
          <div className="carousel_button" onClick={this.onListingClick.bind(this)}>See More</div>
        </div>

        <div className="all_details">
          <p>Year: {year}</p>
          <p>Make: {make}</p>
          <p>Model: {model}</p>
          <p>Trim: {trim}</p>
          <p>Fuel: {fuel}</p>
          <p>Engine: {engine}</p>
          <p>Transmission: {transmission}</p>
          <p>Drivetrain: {drive_train}</p>
          <p>Body Type: {body_type}</p>
          <p>Color: {color}</p>
          <p>Interior Color: {interior_color}</p>
          <p>Interior Type: {interior_type}</p>
          <p>Fuel Economy: {fuel_economy}</p>
          <p>Sold: {sold}</p>
          <p>Stock Number: {stock_number}</p>
          <p>Mileage: {mileage}</p>
        </div>
      </div>
    )
  }
}
