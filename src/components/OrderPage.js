
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import React from 'react';
function OrderPage(props){
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
      };
    return(
    <Container fluid>
        <h2>Your shopping cart:</h2>
        <p >There are no items in your shopping cart</p>
        <Button variant="primary" type="submit"><Link style={linkStyle} to='/category'
>       Continue shopping </Link>
      </Button>
    </Container>
    )
}
export default OrderPage;