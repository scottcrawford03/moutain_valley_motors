import React from 'react'
import ReactDOM from 'react-dom'
import Homepage from './components/homepage'


document.addEventListener('DOMContentLoaded', () => {
  const homepage = document.querySelector('#homepage')
  const objectsDataTag = document.getElementById('index_data')
  const objectsData = JSON.parse(objectsDataTag.getAttribute('data'))
  const featuredImages = objectsData.data

  ReactDOM.render(<Homepage featuredPhotos={featuredImages}/>, homepage)
})
