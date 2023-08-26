import React, { useState } from 'react'
import './ImageFilter.css';

const ImageFilter = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    console.log("hello")

    const filterableCards = [
        {
            name: 'headphones',
            imgSrc: '/images/headphone-1.jpg',
            title: 'Headphone',
            text: 'Lorem ipsum dollar...'
        },
        {
            name: 'headphones',
            imgSrc: '/images/headphone-2.jpg',
            title: 'Headphone',
            text: 'Lorem ipsum dollar...'
        },
        {
            name: 'camera',
            imgSrc: '/images/camera-1.jpg',
            title: 'Headphone',
            text: 'Lorem ipsum dollar...'
        },
        {
            name: 'camera',
            imgSrc: '/images/camera-2.jpg',
            title: 'Headphone',
            text: 'Lorem ipsum dollar...'
        },
        {
            name: 'shoes',
            imgSrc: '/images/shoe-1.jpg',
            title: 'Headphone',
            text: 'Lorem ipsum dollar...'
        },
        {
            name: 'shoes',
            imgSrc: '/images/shoe-2.jpg',
            title: 'Headphone',
            text: 'Lorem ipsum dollar...'
        },
    ]



  return (
    <>
      <div className="container">
        <div className="filter_buttons">
            <button className={activeFilter == "all" ? 'active' : ''} onClick={() => setActiveFilter('all')}>Show All</button>
            <button className={activeFilter == "headphones" ? 'active' : ''} onClick={() => setActiveFilter('headphones')}>Headphones</button>
            <button className={activeFilter == "camera" ? 'active' : ''} onClick={() => setActiveFilter('camera')}>Camera</button>
            <button className={activeFilter == "shoes" ? 'active' : ''} onClick={() => setActiveFilter('shoes')}>Shoes</button>
        </div>
        <div className="filterable_cards">
            {
                filterableCards.map((card, index) => (
                    <div key={index} className={`card ${card.name === activeFilter || activeFilter === 'all' ? '' : 'hide'}`}>
                        <img src={card.imgSrc} alt={card.name} />
                        <div className="card_body">
                            <h6 className='card_title'>{card.title}</h6>
                            <p className='card_text'>{card.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>

      </div>
    </>
  )
}

export default ImageFilter