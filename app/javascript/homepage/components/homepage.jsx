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
      {image_url: "https://mountainvalleymotors.nyc3.digitaloceanspaces.com/abc123-ford-f150-raptor/front.jpg"},
      {image_url: "https://www.biography.com/.image/t_share/MTIwNjA4NjMzNzYwMjg2MjIw/nicolas-cage-9234498-1-402.jpg"}
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
