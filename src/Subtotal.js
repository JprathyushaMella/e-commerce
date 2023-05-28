import React from 'react'
import './Subtotal.css'

function Subtotal(props) {
  const cartData = Object.values(props)
  
  const getTotalPrice=()=>{
    if(cartData.length > 1){
      const priceSum = cartData.map(item => item.price*item.qty).reduce((prev, next) => prev + next)
    return priceSum
    }
    return cartData[0].price*cartData[0].qty
  }

  return (
    <div className='subtotal'>
        <p className='subtotal__title'>Subtotal ({cartData?cartData.length:0} items ): <strong>{cartData.length>0?getTotalPrice():0}</strong></p> 
        <small className='subtotal__gift'>
            <input type='checkbox' />   This order contains a gift
        </small> 
        <button className='subtotal_btn'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
