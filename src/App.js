import { LogginContext } from './components/LoginContext';
import { ProductsContext } from './components/ProductsContext';
import { useState, useEffect, useMemo } from 'react';
// import Axios from 'axios';
import API from "./api/api";
import AppRoutes from './AppRoutes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const [products, setProducts] = useState({});
  const value = useMemo(() => ({ loggedIn, setLoggedIn }), [loggedIn]);

// function getSessionInfo(){
//     Axios.get('http://localhost:3001/user/login')
//     .then((response) => {
//       setLoggedIn(true);
//     })
// }

useEffect(() => {
  const api = new API();
  api.checkLogin().then((result) => {
    console.log(result);
    setLoggedIn(result.data.userLoggedIn);
  });
},[loggedIn]);

function getProductsInfo(){
  const api = new API();
  api.getProducts()
  .then((response) => {
    setProducts(response.data)
  })   
  }
  getProductsInfo();
  return (
    <div className="App">
      <LogginContext.Provider value = {value}>
        <ProductsContext.Provider value = {[products, setProducts]}>
        <AppRoutes loggedIn={loggedIn}/>   
      </ProductsContext.Provider>
      </LogginContext.Provider>   
    </div>
  );
}

export default App;
