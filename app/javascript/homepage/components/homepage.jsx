import React from 'react'
import Application from '../../shared/components/application'
import Carousel from '../../shared/components/carousel'

export default class App extends React.Component {
  state = {
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render() {
    const photos = [
      {image_url: "https://mountainvalleymotors.nyc3.digitaloceanspaces.com/mazda/mazda_1.jpg"},
      {image_url: "https://mountainvalleymotors.nyc3.digitaloceanspaces.com/mazda/mazda_2.jpg"}
    ]
    return (
      <Application>
        <Carousel
          photos={photos}
        />
      </Application>
    )
  }
}
