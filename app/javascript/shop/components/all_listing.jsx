import React from 'react'
import Carousel from 'nuka-carousel';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data,
      photos: this.props.photos
    }
  }

  handlePhotoClick() {
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
        <div className="all_page_carousel">
          <Carousel
            initialSlideHeight={50}
            initialSlideWidth={200}
          >
            {photos.map((photo) => {
              const { image_url } = photo
              return (<img onClick={this.handlePhotoClick.bind(this)} key="abc" src={image_url} alt=""/>)
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
    )
  }
}
