import React from 'react'
import Application from '../../shared/components/application'
import Carousel from 'nuka-carousel';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.listing.data,
      photos: this.props.listing.photos
    }
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render() {
    const { photos, data } = this.state

    const { year, make, model, trim, fuel, engine, transmission,
      drive_train, body_type, color, interior_color, interior_type,
      fuel_economy, sold, stock_number, mileage
    } = data

    return (
      <Application>
        <div className="single_listing_show">
          <div className="single_listing_carousel">
            <Carousel>
              {photos.map((photo) => {
                return(<img src={photo.image_url} />)
              })}
            </Carousel>
          </div>
          <div className="single_details">
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
      </Application>
    )
  }
}
