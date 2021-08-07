import './App.css';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/nav/nav';
import Home from './components/home/home';
import Cart from './components/shopping-cart/cart';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';


function App() {

  const [num, setNum] = useState(0);
  const [itemData, setItemData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [msg, setMsg] = useState('Check your cart!');


  const getData = async () => {
    try {
      const dummyRequest = await axios.get('https://fakestoreapi.com/products');
      const response = dummyRequest.data
      console.log(response);
      setItemData(response);

    }
    catch (err) {console.log(err)}
  }

  const handleDelete = id => {
    const newArrOfItems = cartData.filter(item => item.id !== id);
    setItemData(newArrOfItems);
  }

  const handleAddItem = id => {
    const getItem = itemData.find(item => item.id === id);
    let cartCollection = [getItem];
    const cartCollectionClone = [...cartCollection]
    console.log(cartCollectionClone);
    setCartData(cartCollectionClone);
    
  }

  return (
    <div className="App">
      <Nav onTotal={cartData}/>
      <Switch>
        <Route exact path='/'>
          <Home 
            onGet={getData}
            onMsg={msg}
            onData={itemData}
            onAdd={handleAddItem}
            />
        </Route>
        <Route path='/cart'>
          <Cart 
            onAddToCart={cartData}
            onDelete={handleDelete}
            />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
