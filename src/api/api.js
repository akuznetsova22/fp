import Axios from "axios";

Axios.defaults.withCredentials = true;

export default class API {
  #url;

  constructor() {
    this.#url = "http://localhost:3001";
  }
  getProducts(){
    return Axios.get(`${this.#url}/products`)
  }
  addOrder(item){
    return Axios.post(`${this.#url}/shoppingcart/add`,{
        product: item
    });     
  }
  addWishlist(item){
    return Axios.post(`${this.#url}/wishlist/add`,{
        product: item
    })
  }
  changeAddress(userId, address){
    return Axios.post(`${this.#url}/user/change_address`,{
        id: userId,
        address: address
      })
  }
  changeImg(userId,img){
    return Axios.post(`${this.#url}/user/change_img`,{
        id: userId,
        imgSource: img
      })
  }
  checkLogin(){
    return Axios.get(`${this.#url}/user/login`)
  }
  login(email, psw){
    return Axios.post(`${this.#url}/user/login`,{
        email: email,
        password: psw,
      })
  }
  getShoppingCart(){
    return Axios.get(`${this.#url}/shoppingcart`)
  }
  register(firstNameReg,lastNameReg,emailReg, passwordReg, addressReg, imgSourceReg){
    return Axios.post(`${this.#url}/user/register`,{
    firstName: firstNameReg,
    lastName: lastNameReg,
    email: emailReg,
    password: passwordReg,
    address: addressReg,
    imgSource: imgSourceReg
  })
  }
  deleteShoppingCart(item){
    return Axios.post(`${this.#url}/shoppingcart/delete`,{
        product: item,
      })
  }
  checkout(item,start, end, delivery){
    return Axios.post(`${this.#url}/shoppingcart/checkout`,{
        product: item,
        startDate: start,
        endDate: end,
        delivery: delivery, 
      })
  }
  getUserDetails(){
    return Axios.get(`${this.#url}/user/details`)
  }
  logout(){
    return Axios.post(`${this.#url}/user`)
  }
  getOrderHistory(){
    return Axios.get(`${this.#url}/user/orderhistory`)
  }
  getWishlist(){
    return Axios.get(`${this.#url}/wishlist`)
  }
  deleteWishlist(item){
    return Axios.post(`${this.#url}/wishlist/delete`,{
        product: item,
      })
  }
  addToCart(item){
    return Axios.post(`${this.#url}/wishlist/addtocart`,{
        product: item,
      })
  }

}
