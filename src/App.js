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
  const [userData, setUserData] = useState([]);


  const getData = async () => {
    try {
      const dummyRequest = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const response = dummyRequest.data
      setUserData(response);
    }
    catch (err) {console.log(err)}
  }

  const handleIncrement = () => {
        console.log('works from app component');
    }

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home 
            onIncrement={handleIncrement}
            onValue={num}
            onGet={getData}
            />
        </Route>
        <Route path='/cart'>
          <Cart onData={userData}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
