import React from 'react'
import './Footer.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import {auth} from './firebase'

function Footer(props) {
  const {cartData, user} = props
  const handleAuthentication = () => {
    if(user){
      auth.signOut()
    }
  }
  return (
    <div className='footer'>
       <div className='footer_nav col-12 col-sm-6 col-lg-6'>
       <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className='header__options'>
            <span className='header__optionsone'>Hello, {user?user.email.split('@')[0]:'Guest'}</span>
            <span className='header__optionstwo'>{user? 'SignOut': 'SignIn'}</span>
        </div>
        </Link>
        <div className='header__options'>
            <span className='header__optionsone'>Returns</span>
            <span className='header__optionstwo'>& Orders</span>
        </div>
        <div className='header__options'>
          <span className='header__optionsone'>Your</span>
            <span className='header__optionstwo'>Prime</span>
        </div>

        <Link to='/checkout'>
        <div className='header__optionbasket'>
            <ShoppingBasketIcon/>
            <span className='header__optionstwo header__basketcount'>{
            cartData? cartData.length: 0
            }</span>
        </div>
        </Link>
        </div>
        </div>
  )
}

export default Footer
