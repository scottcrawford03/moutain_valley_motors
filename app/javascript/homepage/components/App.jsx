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
        <p>Your car buying experience starts here.</p>
        </div>
      </div>
    )
  }
}
