import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api/api.js";


function ShoppingCartRows (props){
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [delivery, setDelivery] = useState('');
    const [validated, setValidated] = useState(false);
    const products = props.products;
    const navigate = useNavigate();
    const api = new API();


    
    function deleteRow(e){
        e.preventDefault();
        api.deleteShoppingCart(e.target.value)
        .then ((response) => {
              navigate('/user/shoppingcart')
          })
    }
    function checkout(e){
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
          e.stopPropagation();
        }
        setValidated(true)
        if(validated){
            api.checkout(e.target.value,start,end,delivery)
            .then ((response) => {
                alert('You will now be refirected to payment')    
            })
        }
    }
    let productList = [];
    for (let i = 0; i < products.length; i++){
        productList.push(
        <Row>
          <Col>Menu
            <p>{products[i]}</p>
          </Col>
            <Form noValidate validated={validated}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  onChange = {(e) => {
                    setStart(e.target.value);
                  }}
                />
                <Form.Control.Feedback type='valid' >Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter start date.
                </Form.Control.Feedback>        
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  onChange = {(e) => {
                    setEnd(e.target.value);
                  }}
                />
                <Form.Control.Feedback type='valid' >Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter end date.
                </Form.Control.Feedback>        
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Delivery details</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Optional (Enter desired delivery times)'
                  onChange = {(e) => {
                    setDelivery(e.target.value);
                  }}
                />
                <Form.Control.Feedback type='valid' >Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter start date.
                </Form.Control.Feedback>        
              </Form.Group>
              </Row>
            <Col><Button value={products[i]} start={start} end={end} delivery={delivery} onClick={checkout}>Checkout</Button></Col>
            <Col><Button value={products[i]} variant="danger" onClick={deleteRow}>Delete</Button></Col>
        </Form>
        </Row>)
    }
    return (
        <>
        {productList}
        </>
    )
}
export default ShoppingCartRows;