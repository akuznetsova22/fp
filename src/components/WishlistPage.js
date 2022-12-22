import { Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Axios from 'axios';
function WishlistPage(props){
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin().then((response) => {
      if (response.data.userLoggedIn){
        console.log(response.data)

      } else {
        navigate('/user/login');
      }

  })
  },[])
  function checkLogin(){
    return Axios.get('http://localhost:3001/user/login')
  }
  function delRow1(e){
    e.preventDefault();
    let row = document.getElementById('row1');
    row.hidden = true;
  }
  function delRow2(e){
    e.preventDefault();
    let row = document.getElementById('row2');
    row.hidden = true;
  }

    return(
    <Container fluid>
        <h2>Your favourites:</h2>
        <Table striped bordered hover id='order'>
      <thead>
        <tr>
          <th>#</th>
          <th>Menu</th>
        </tr>
      </thead>
      <tbody>
        <tr id='row1'>
          <td>1</td>
          <td>Surprise Menu</td>
          <td><Button variant="outline-primary" type="submit"><Link to='/user/shoppingcart'
>      To Cart </Link></Button></td>
          <td><Button onClick={delRow1} variant="danger" type="submit">Delete</Button></td>
        </tr>
        <tr id='row2'>
          <td>2</td>
          <td>Gastronomic tour Menu</td>
          <td><Button variant="outline-primary" type="submit"><Link to='/user/shoppingcart'
>      To Cart </Link></Button></td>
          <td><Button onClick={delRow2} variant="danger" type="submit">Delete</Button></td>
        </tr>
       
      </tbody>
    </Table>
    <p id='noItems' hidden>There are no items in your shopping cart</p>
        <Button variant="outline-primary" type="submit"><Link to='/category'
>       Continue shopping </Link>
      </Button>
    </Container>
    )}

export default WishlistPage;