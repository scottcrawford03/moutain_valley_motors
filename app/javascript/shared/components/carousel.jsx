import React from 'react'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      photos: this.props.photos,
      selectedIndex: 0,
      photosLength: this.props.photos.length - 1
    }
  }

  onClickRight() {
    const { photosLength, selectedIndex } = this.state

    if (photosLength === selectedIndex) {
      return
    }

    this.setState({ selectedIndex: selectedIndex + 1 })
  }

  onClickLeft() {
    const { selectedIndex } = this.state
    if (0 === selectedIndex) {
      return
    }
    this.setState({ selectedIndex: selectedIndex - 1 })
  }

  render() {
    const { photos, selectedIndex } = this.state
    const selectedPhoto = photos[selectedIndex]

    return (
      <div className="carousel">
        <div className="selected_photo">
          <div className="arrow">
            <span className="arrow_button left" onClick={this.onClickLeft.bind(this)}>Left</span>
            <span className="arrow_button right" onClick={this.onClickRight.bind(this)}>Right</span>
          </div>
          <img className="carousel_photo" src={selectedPhoto.image_url} alt=""/>
        </div>
      </div>
    )
  }
}
