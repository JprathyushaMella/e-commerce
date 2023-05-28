import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import BasketProduct from './BasketProduct'

function Checkout(props) {
  const {cartData, deleteCartItem, user} = props


  return (
    <div className=' row checkout'>
        <div className='checkout__left col-12 col-md-8'>
            <img className='checkout__ad'
            src='https://keynesdigital.com/wp-content/uploads/2023/03/brand-awareness.jpeg'
            alt='ad'/>
            <div>
                {console.log(cartData)}
                <h3 className='checkout__intro'>Hello, {user?.email.split('@')[0]}</h3>
                <h2 className='checkout__title'> Your Shopping Basket</h2>
                {cartData && cartData.map((card) => 
                    <BasketProduct {...card} key = {card.id} deleteCartItem={deleteCartItem}/>)}
                {(!cartData || cartData.length === 0) && <h3>Your Cart is empty</h3>}
            </div>
        </div>
            
        <div className='checkout__right col-12 col-md-4'>
            <Subtotal {...cartData}/>
        </div>
      
    </div>
  )
}

export default Checkout
