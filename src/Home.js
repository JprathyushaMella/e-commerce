import React, { useState } from 'react'
import Product from './Product';
import Carousel from 'react-bootstrap/Carousel';
 
import './Home.css'

function Home(props) {
  const imgData = [
    {
      image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/BVD/May/Deals-Unrec-PC-3000._CB588530729_.jpg'
    },
    {
      image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/May/BVD/Unrec/Shoes/Revised/Shoes_3000._CB588631409_.jpg'
    },
    {
      image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg'
    }
  ]
  const {data, loading, deleteCard, addToCart} = props
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
      
  return (

  
    <div className='home'>
        <div className='home__container'>
          <div className='home__image'>
          <Carousel activeIndex={index} onSelect={handleSelect}>
       {imgData.map((slide) => {
        return (
          <Carousel.Item key={Math.random()}>        
          <img
            className="d-block w-100"
            src={slide.image}
            alt="slider"
            
          />
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  
          </div>
            {/* <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/BVD/May/Deals-Unrec-PC-3000._CB588530729_.jpg'
            className='home__image'
            alt = 'shop' /> */}
            
            <div className='home__row'>
              <div className='loading'>
                {loading &&  <h4>Loading...</h4>}
                </div>
                <div className='product-card'>
                    {!loading && data.map((card) => 
                    <Product {...card} key = {card.id} isDelete = {deleteCard} addToCart = {addToCart}/>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
