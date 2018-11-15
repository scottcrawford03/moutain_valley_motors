import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'



document.addEventListener('DOMContentLoaded', () => {
  const shopPage = document.querySelector('#shop')
  const objectsDataTag = document.getElementById('index_data')
  const objectsData = JSON.parse(objectsDataTag.getAttribute('data'))
  ReactDOM.render(<App
    listings={objectsData}
  />, shopPage)
})

