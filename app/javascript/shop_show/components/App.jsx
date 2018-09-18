import React from 'react'
import NavBar from '../../shared/components/nav_bar'
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
      <div>
        <NavBar/>
        <div className="body_content">
          <div className="single_listing_show">
            <div className="single_listing_carousel">
              <Carousel>
                {photos.map((photo) => {
                  return(<img src={photo.image_url} />)
                })}
              </Carousel>
            </div>
            <p>{year}</p>
            <p>{make}</p>
            <p>{model}</p>
            <p>{trim}</p>
            <p>{fuel}</p>
            <p>{engine}</p>
            <p>{transmission}</p>
            <p>{drive_train}</p>
            <p>{body_type}</p>
            <p>{color}</p>
            <p>{interior_color}</p>
            <p>{interior_type}</p>
            <p>{fuel_economy}</p>
            <p>{sold}</p>
            <p>{stock_number}</p>
            <p>{mileage}</p>
          </div>
        </div>
      </div>
    )
  }
}
