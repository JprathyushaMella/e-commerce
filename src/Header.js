import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import {auth} from './firebase'

function Header(props) {
    const {cartData, user, search, searchChanged} = props

    const issearchChanged = (e) =>{
      searchChanged(e.target.value)
    }

    const handleAuthentication = () => {
      if(user){
        auth.signOut()
      }
    }


  return (
    

      <div className='row header'>
      <div className='col-3 col-sm-2 col-lg-2 header__image'>
      <Link to='/'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGykU-ILgRgSRBx-DfAHQzCqInSfVHil7uw&usqp=CAU'
        className='header__logo'
        alt='logo' />
       </Link>
       </div>

       <div className='header__search col-8 col-sm-4 col-lg-4'>
            <input className='header__searchinput' type='text' value={search} onChange={issearchChanged}/>
            <SearchIcon className='header__searchicon'/>
       </div>
       <div className='header__nav col-12 col-sm-6 col-lg-6'>
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

export default Header
