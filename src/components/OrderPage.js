
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import jsCookie from "js-cookie";
import React from 'react';
import { Navigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Axios from 'axios';

function OrderPage(props){
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
  function verify(e){
    e.preventDefault();
    const start = document.getElementById('start');
    const end = document.getElementById('end');
    const address = document.getElementById('address');
    const warningStart = document.getElementById('warning-start');
    const warningEnd = document.getElementById('warning-end');
    const warningAddress = document.getElementById('warning-address');
    const warning = document.getElementById('warning');


    if (!start.value){
      warning.hidden = false;
      warningStart.hidden = false;
    } else {warningStart.hidden = true}
       if (!end.value){
      warning.hidden = false;
      warningEnd.hidden = false;
    } else {warningEnd.hidden = true}   if (!address.value){
      warning.hidden = false;
      warningAddress.hidden = false;
    } else {warningAddress.hidden = true}
    
    if (start.value & end.value & address.value) {
    alert('You will now be redirected to payment')}
  }
  function deleteTable(e){
    e.preventDefault();
    let table = document.getElementById('order');
    const noItems = document.getElementById('noItems');
    table.hidden = true;
    noItems.hidden = false;
  }

    return(
      <Container fluid>
          <h2>Your shopping cart:</h2>
          <Table striped bordered hover id='order'>
            <thead>
              <tr>
                <th>Menu</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Delivery Times</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Surprise Menu</td>
                <td><input id='start' name='startDate'></input></td>
                <td><input id='end' name='endDate'></input></td>
                <td><input id='address' name='address' placeholder='9-12'></input></td>
              </tr>
              <tr>
              <td id='warning'hidden></td>
              <td id='warning-start'hidden>Please fill in start date</td>
              <td id='warning-end'hidden>Please fill in end date</td>
              <td id='warning-address'hidden>Please fill in preferred delivery times </td>
              </tr>
            </tbody>
          </Table>
          <p id='noItems' hidden>There are no items in your shopping cart</p>
          <Button variant="primary" type="submit" onClick={verify}>Checkout
          </Button>
          <Button variant="danger" type="button" onClick={deleteTable}>Delete
          </Button>
      </Container>
      )}

export default OrderPage;