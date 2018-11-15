import React from 'react'
import Application from '../../shared/components/application'
import Carousel from '../../shared/components/carousel'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render() {
    return (
      <Application>
        <Carousel
          photos={this.props.featuredPhotos}
        />
      </Application>
    )
  }
}
