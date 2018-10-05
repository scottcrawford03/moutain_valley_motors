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
          <img src="https://www.nps.gov/yose/planyourvisit/images/20170618_155330.jpg?maxwidth=1200&maxheight=1200&autorotate=false" />
          <img src="https://www.myyosemitepark.com/.image/t_share/MTQ3OTg4NjE5MzY2NjM5MDcx/yosemite-glacier-point.jpg" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
        </Carousel>
      </Application>
    )
  }
}
