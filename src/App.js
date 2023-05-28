
import Header from './Header';
import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase'
import { cloneDeep } from "lodash"; 
import Footer from './Footer';

function App() {
  const url = 'https://dummyjson.com/products'

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cartData, setCartData] = useState(null);
    const [user, setUser] = useState(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
      auth.onAuthStateChanged(authUser=>{
        if(authUser){
          setUser(authUser)
        }
        else{
            setUser(null)
        }
      })
        fetch(url)
          .then(response => response.json())
          .then((usefulData) => {
            setLoading(false);
            let d = usefulData['products']
            let q = {qty:0}
            d = d.map(datai => ({...datai,...q}))
            const searchedData = d.filter(data1=> data1.title.toLowerCase().includes(search))
            setData(searchedData)
            // setData(d);
          })
          .catch((e) => {
            console.error(`An error occurred: ${e}`)
          });
      }, [search]);

      const deleteCard = (id) => {
        const filteredData = data.filter((element) => element.id !== id)
        setData(filteredData)
      }

      const deleteCartItem = (id) => {
        var filteredData = cartData.filter((element) => element.id !== id)
        setCartData(filteredData)
      }

      const qtyItem = (basketData, dataIn) => {
        const ind = dataIn?dataIn.indexOf(basketData[0]):null
        
        if(ind || ind !== -1){
          dataIn[ind].qty = dataIn[ind].qty+1
          return dataIn
        }
        return dataIn
      }

      const addToCart =  (id) => {
        const basketData = data.filter((element) => element.id === id)
        const basketCartData = cartData?cartData.filter((element) => element.id === id):[]
        const first = basketCartData.length>0?cloneDeep(basketCartData):cloneDeep(basketData)
        first[0].qty = first[0].qty+1
        const bdata = cartData?[...cartData, ...first]:first

        setCartData(prevData => basketCartData.length>0?qtyItem(basketCartData, prevData):bdata)
      }

      const searchChanged = (searched) =>{
        setSearch(searched)
      }
  return (
     <Router>
    <div className="App">
      {!loading && console.log(search)}
    <Header cartData = {cartData} user={user} search={search} searchChanged={searchChanged}/>
      <Routes>
        <Route exact path='/' 
        element = {<Home data = {data} 
        loading={loading} 
        deleteCard = {deleteCard} 
        addToCart={addToCart}/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        
        <Route exact path = '/checkout' 
        element = {<Checkout cartData = {cartData} deleteCartItem={deleteCartItem} user={user}  /> }>
          
        </Route>
       </Routes>
       <Footer />
    </div>
    </Router>
  );
}

export default App;
