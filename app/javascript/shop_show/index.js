import React from 'react'
import ReactDOM from 'react-dom'
import ShopShow from './components/shop_show'


document.addEventListener('DOMContentLoaded', () => {
  const shopShowPage = document.querySelector('#shop_show')
  const objectsDataTag = document.getElementById('show_data')
  const objectsData = JSON.parse(objectsDataTag.getAttribute('data'))
  ReactDOM.render(<ShopShow listing={objectsData}/>, shopShowPage)
})

