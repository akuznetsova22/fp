import HomePage from './components/HomePage.js'
import CategoryPage from './components/CategoryPage';
import LoseWeightPage from './components/LoseWeightPage';
import BuildMusclesPage from './components/BuildMusclesPage';
import LazyPage from './components/LazyPage';
import Register from './components/Register';
import ChangePwdPage from './components/ChangePswPage';
import ForgotPwdPage from './components/ForgotPswPage';
import LoginPage from './components/LoginPage';
import OrderPage from './components/OrderPage';
import WishlistPage from './components/WishlistPage';
import UserAccountPage from './components/UserAccountPage';
import UserOrderHistoryPage from './components/UserOrderHistoryPage';
import ChangeUserDetailsPage from './components/ChangeUserDetailsPage';
import NavBar from './components/NavBar.js';
import Top from './components/Top.js';
import Copyright from './components/Copyright.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function AppRoutes(props){
    return (
        <Router>
        <Top/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage loggedIn={props.loggedIn}/>} />
          <Route path="/category" element={<CategoryPage loggedIn={props.loggedIn} />} />
          <Route path="/category/loseweight/menus" element={<LoseWeightPage/>} loggedIn={props.loggedIn}/>
          <Route path="/category/buildmuscle/menus" element={<BuildMusclesPage/>} loggedIn={props.loggedIn}/>
          <Route path="/category/lazy/menus" element={<LazyPage/>} loggedIn={props.loggedIn}/>
          <Route path="/user/login" element={<LoginPage loggedIn={props.loggedIn}/>} />
          <Route path="/user/register" element={<Register loggedIn={props.loggedIn}/>} />
          <Route path="/user/login/forgotpwd" element={<ForgotPwdPage/>} />
          <Route path="/user/login/forgotpwd/changepwd" element={<ChangePwdPage/>} />
          <Route path="/user/account" element={ <UserAccountPage loggedIn={props.loggedIn}/>} />
          <Route path="/user/wishlist" element={<WishlistPage loggedIn={props.loggedIn}/>} />
          <Route path="/user/orderhistory" element={<UserOrderHistoryPage loggedIn={props.loggedIn}/>} />
          <Route path="/user/shoppingcart" element={<OrderPage loggedIn={props.loggedIn}/>} />
          <Route path="/user/changedetails" element={<ChangeUserDetailsPage loggedIn={props.loggedIn}/>} />
        </Routes>
        <Copyright/>
        </Router>
    )
}
export default AppRoutes;