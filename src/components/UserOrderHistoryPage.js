import React from 'react';
import { LogginContext } from "./LoginContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import API from '../api/api';
import OrderHistoryTable from "./OrderHistoryTable";

function UserOrderHistoryPage(props){
    const [products, setProducts] = useState([]);
    const {setLoggedIn} = useContext(LogginContext);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
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
                } else {
                  navigate('/user/login');
                }
              })
      api.getOrderHistory()
      .then((response) => {
        setProducts(response.data);
        setIsLoaded(true);
      })     
      }
      return(
        <OrderHistoryTable loading={isLoaded}  products={products}></OrderHistoryTable>
      )
  }

export default UserOrderHistoryPage;