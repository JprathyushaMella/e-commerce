import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Product.css'

function Product(props) {
    const {id, title, thumbnail, description, price, rating, isDelete, addToCart} = props


    const clickedDelete = () =>{
        isDelete(id)
    }

    const addCart = () => {

        addToCart(id)
    }

    

  return (
    <div className='product'>
           
        <div className='product__info'>
            <h4 className='title'>{title}</h4>
            <p >{description}</p>            
        </div>
        <img src={thumbnail} alt={title}/>
        <h4 className='product__price'>
                <small>Rs.</small>
                <strong>{
                price}</strong>
        </h4> 
        <div className='product__stars'>
            {Array(Math.round(rating)).fill().map(() => <li key={Math.random()} ><StarIcon sx={{ color: '#ffcc00e0'}} /></li>)}
        </div>
        <button className='add-cart-btn' onClick={() => addCart()}>Add to Cart</button>
        <button className='dele-btn' onClick={clickedDelete}>delete</button>
    </div>
  )
}

export default Product
