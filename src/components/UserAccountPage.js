
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
import UserInfo from './UserInfo.js';
import { LogginContext } from "./LoginContext";
import { useContext } from "react";
import API from "../api/api.js";


function UserAccountPage(props){
  const [isLoaded,setIsLoaded] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const {setLoggedIn} = useContext(LogginContext);

  useEffect(() => {
    getSessionInfo()  
  },[]);

  function getSessionInfo(){
    const api = new API();
    api.checkLogin().then((response) => {
      if (response.data.userLoggedIn === true) {
        setUserLoggedIn(true);
      } else {
        navigate('/user/login')
      }
    });
    api.getUserDetails()
    .then((response) => {
      setFirstName(response.data[0].First_Name);
      setLastName(response.data[0].Last_Name);
      setEmail(response.data[0].Email);
      setAddress(response.data[0].Address);
      setIsLoaded(true);
    })    
    }
    function logout(){
      const api = new API();
      api.logout()
      setIsLoaded(false);
      setLoggedIn(false);
      navigate('/user/login');
    }

    return(
      <UserInfo loading={isLoaded} logout={logout} firstName={firstName} lastName={lastName} email={email} address={address}></UserInfo>
    )
}

export default UserAccountPage;