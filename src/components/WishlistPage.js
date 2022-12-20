
import { Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import React from 'react';
import jsCookie from "js-cookie";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
function WishlistPage(props){
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
      };
      if (!jsCookie.get('userID')){
        return <Navigate replace to ='/user/login'></Navigate>
        } else {
    return(
    <Container fluid>
        <h2>Your favourites:</h2>
        <p >There are no items in your saved list</p>
        <Button variant="primary" type="submit"><Link style={linkStyle} to='/category'
>       Continue shopping </Link>
      </Button>
    </Container>
    )}
}
export default WishlistPage;