import './App.css';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Nav from './components/nav/nav';
import Store from './components/store/store';
import Cart from './components/shopping-cart/cart';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';


function App() {

  const [itemData, setItemData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [collectItemPrice, setCollectItemPrice] = useState([]);

  const getData = async () => {
    try {
      const storeItemsRequest = await axios.get('https://fakestoreapi.com/products');
      const response = storeItemsRequest.data
      setItemData(response);

    }
    catch (err) {console.log(err)}
  }

  const handleDelete = id => {
    const newArrOfItems = cartData.filter(item => item.id !== id);
    const removeItemPrice = collectItemPrice.filter(item => item.id !== id);
    setCollectItemPrice(removeItemPrice);
    setCartData(newArrOfItems);
  }

  const handleAddItem = id => {
    const getItem = itemData.find(item => item.id === id);
    const priceObj = {
      id: getItem.id,
      price: getItem.price,
    }
    setCollectItemPrice(prevState => [...prevState, priceObj]);
    setCartData(prevState => [...prevState, getItem]);
  }

  return (
    <div className="App">
      <Nav onTotal={cartData}/>
      <Switch>
        <Route exact path='/'>
          <Store 
            onGet={getData}
            onData={itemData}
            onAdd={handleAddItem}
            onAddToCart={cartData}
            />
        </Route>
        <Route path='/cart'>
          <Cart 
            onAddToCart={cartData}
            onDelete={handleDelete}
            onTotalPrice={collectItemPrice}
            />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
