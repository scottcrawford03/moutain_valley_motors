import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'


document.addEventListener('DOMContentLoaded', () => {
  console.log("yolo")
  const shopShowPage = document.querySelector('#shop_show')
  const objectsDataTag = document.getElementById('show_data')
  const objectsData = JSON.parse(objectsDataTag.getAttribute('data'))
  ReactDOM.render(<App listing={objectsData}/>, shopShowPage)
})

