// Breadcrum.jsx
import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

const Breadcrum = (props) => { // Add props as an argument
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product && product.category} <img src={arrow_icon} alt="" /> {product && product.name} 
    </div>
  )
}

export default Breadcrum
