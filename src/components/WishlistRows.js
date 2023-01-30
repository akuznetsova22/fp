import { Row } from "react-bootstrap";
import {Col} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import API from "../api/api.js";


function WishlistRows (props){
    const products = props.products;
    const navigate = useNavigate();
    const api = new API();

    
    function deleteRow(e){
        e.preventDefault();
        api.deleteWishlist(e.target.value)
        .then ((response) => {
              navigate('/user/wishlist')
          })    
    }
    function addToCart(e){
        e.preventDefault();
        api.addToCart(e.target.value)
        .then ((response) => {
            api.deleteWishlist(e.target.value)
            .then ((response) => {
                navigate('/user/shoppingcart')
            }) 
          })
    }
    let productList = [];
    for (let i = 0; i < products.length; i++){
        productList.push(<Row>
            <Col>{i+1}</Col>
            <Col>{products[i]}</Col>
            <Col><Button value={products[i]} onClick={addToCart}>Add to Cart</Button></Col>
            <Col><Button value={products[i]} variant="danger" onClick={deleteRow}>Delete</Button></Col>
        </Row>)
    }
    return (
        <>
        <Row>
            <Col>#</Col>
            <Col>Menu</Col>
            <Col></Col>
            <Col></Col>
        </Row>
        {productList}
        </>
    )
}
export default WishlistRows;