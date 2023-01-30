import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LogginContext } from "./LoginContext";
import { useContext } from "react";
import WishlistTable from "./WishlistTable";
import API from "../api/api.js";

function WishlistPage(props){
  const [products, setProducts] = useState([]);
  const {setLoggedIn} = useContext(LogginContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const api = new API();


  useEffect(() => {
    getSessionInfo() 
  },[products])

  function getSessionInfo(){
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
    api.getWishlist()
    .then((response) => {
      setProducts(response.data);
      setIsLoaded(true);
    })      
    }
    return(
      <WishlistTable loading={isLoaded}  products={products}></WishlistTable>
    )
}

export default WishlistPage;