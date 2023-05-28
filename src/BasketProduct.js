import React from 'react'
import './BaskeProduct.css'
import CancelPresentationSharpIcon from '@mui/icons-material/CancelPresentationSharp';

function BasketProduct(props) {
    const {id, title, thumbnail, description, qty, price, deleteCartItem} = props

  return (
    <div className='basketproduct'>
        
      <img src={thumbnail}
      alt='product'
      className='basketproduct__image'/>
      <div className='basketproduct__info'>
        <h4 className='basketproduct__title'>
            {title}
        </h4>
        <p className='basketproduct__description'>{description}</p>
        <h5 className='basketproduct__description'>{qty} {qty>1?'Items': 'Item'}</h5>
      </div>
      <div className='basketproduct__price'>
        <h4 className='basketproduct__price'>Rs. {qty*price}</h4>
      </div>
      <span className='delete' onClick={() => deleteCartItem(id)}><CancelPresentationSharpIcon fontSize="x-small"
/></span>
    </div>
  )
}

export default BasketProduct
