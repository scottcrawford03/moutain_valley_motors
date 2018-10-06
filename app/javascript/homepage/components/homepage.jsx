import React from 'react'
import Application from '../../shared/components/application'
import Carousel from 'nuka-carousel';

export default class App extends React.Component {
  state = {
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render() {
    return (
      <Application>
        <Carousel
          height={'100%'}
        >
          <img src="https://mountainvalleymotors.nyc3.digitaloceanspaces.com/abc123-ford-f150-raptor/front.jpg" />
          <img src="https://mountainvalleymotors.nyc3.digitaloceanspaces.com/abc123-ford-f150-raptor/front.jpg" />
          <img src="https://mountainvalleymotors.nyc3.digitaloceanspaces.com/abc123-ford-f150-raptor/front.jpg" />
          <img src="https://mountainvalleymotors.nyc3.digitaloceanspaces.com/abc123-ford-f150-raptor/front.jpg" />
          <img src="https://mountainvalleymotors.nyc3.digitaloceanspaces.com/abc123-ford-f150-raptor/front.jpg" />
          <img src="https://mountainvalleymotors.nyc3.digitaloceanspaces.com/abc123-ford-f150-raptor/front.jpg" />
        </Carousel>
      </Application>
    )
  }
}
