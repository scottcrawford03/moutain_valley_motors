import React from 'react'
import NavBar from '../../shared/components/nav_bar'

export default class App extends React.Component {
  state = {
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="body_content">
          This is the single car page
        </div>
      </div>
    )
  }
}
