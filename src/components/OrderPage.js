import React from 'react';
import { LogginContext } from "./LoginContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import ShoppingCartTable from "./ShoppingCartTable";
import API from '../api/api';

function OrderPage(props){
  const [products, setProducts] = useState([]);
  const {setLoggedIn} = useContext(LogginContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getSessionInfo() 
  },[products])

  function getSessionInfo(){
    const api = new API();
    api.checkLogin()
        .then((response)=> {
            if(response.data.userLoggedIn === true){
                setLoggedIn(response.data.userLoggedIn);
                setUserLoggedIn(true);
               }
            else {
              navigate('/user/login');
            }
            })
    api.getShoppingCart()
    .then((response) => {
      setProducts(response.data);
      setIsLoaded(true);
    })   
    }

    return(
      <ShoppingCartTable loading={isLoaded}  products={products}></ShoppingCartTable>
    )
}

export default OrderPage;