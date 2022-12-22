import './App.css';
import HomePage from './components/HomePage.js'
import CategoryPage from './components/CategoryPage';
import LoseWeightPage from './components/LoseWeightPage';
import BuildMusclesPage from './components/BuildMusclesPage';
import LazyPage from './components/LazyPage';
import Register from './components/Register';
import ChangePwdPage from './components/ChangePswPage';
import NavBar from './components/NavBar';
import ForgotPwdPage from './components/ForgotPswPage';
import LoginPage from './components/LoginPage';
import OrderPage from './components/OrderPage';
import WishlistPage from './components/WishlistPage';
import UserAccountPage from './components/UserAccountPage';
import ChangeUserDetailsPage from './components/ChangeUserDetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './components/Top';
import Copyright from './components/Copyright';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {

  return (
    <div className="App">
       <Router>
        <Top></Top>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/loseweight/menus" element={<LoseWeightPage/>} />
          <Route path="/category/buildmuscle/menus" element={<BuildMusclesPage/>} />
          <Route path="/category/lazy/menus" element={<LazyPage/>} />
          <Route path="/user/login" element={<LoginPage/>} />
          <Route path="/user/register" element={<Register/>} />
          <Route path="/user/login/forgotpwd" element={<ForgotPwdPage/>} />
          <Route path="/user/login/forgotpwd/changepwd" element={<ChangePwdPage/>} />
          <Route path="/user/account" element={ <UserAccountPage/>} />
          <Route path="/user/wishlist" element={<WishlistPage/>} />
          <Route path="/user/shoppingcart" element={<OrderPage/>} />
          <Route path="/user/changedetails" element={<ChangeUserDetailsPage/>} />
        </Routes>
        <Copyright></Copyright>
      </Router>      
    </div>
  );
}

export default App;
