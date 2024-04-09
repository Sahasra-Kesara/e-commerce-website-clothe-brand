import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Veritatis cumque facilis,
                similique iure nulla rem vel unde! Inventore,
                atque! Culpa temporibus repudiandae dolorum
                dicta voluptate dignissimos beatae natus saepe porro!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ipsam reiciendis libero illum molestias cumque, enim
                placeat doloribus autem natus repellendus architecto nulla
                corrupti quidem totam ullam deleniti? Facilis, eligendi animi!
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox