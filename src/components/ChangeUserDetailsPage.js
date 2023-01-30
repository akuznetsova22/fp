import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import API from "../api/api.js";

function ChangeAddressPage(props){
    const [newAddress, setNewAddress] = useState('');
    const [newImg, setImg] = useState('');
    const [userId, setUserId] = useState('');
    const [saved, setSaved] = useState(false);
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => { 
      getSessionInfo();
    },[]);

    function changeAddress(){
      setAddress(newAddress)
      const api = new API();
      api.changeAddress(userId, newAddress)
    }
    function changeImg(){
      setImg(newImg)
      setAddress(newAddress)
      const api = new API();
      api.changeImg(userId, newImg)
  }
    function getSessionInfo(){
      const api = new API();
      api.checkLogin()
      .then((response) => {
          setUserId(response.data.user[0].id);
      })
  }
    function goBack(e){
      e.preventDefault();
      navigate('/user/account')

  }
    const handleSubmit = (event) => {
      event.preventDefault();
      // const form = event.currentTarget;
      if (newAddress){
        changeAddress()
      }
      if (newImg){
        changeImg()
      }
      setSaved(true)
    };

    if (saved) {
      navigate('/user/account')
    } else {
    return (
        <Container fluid>
        <h2>Change address:</h2>
        <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Address</Form.Label>
        <Form.Control type="text" placeholder="Enter new address" onChange = {(e) => {
                        setNewAddress(e.target.value);
                    }}required />
        <Form.Control.Feedback type='valid' >Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Please enter your new address.
          </Form.Control.Feedback> 
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Profile picture</Form.Label>
          <Form.Control type="file" onChange = {(e) => {
                        setImg(e.target.value);
                    }} />
        </Form.Group>
        <Container fluid>
        <Button variant="secondary" onClick={goBack} type="button">Go Back
        </Button>
        <Button variant="danger" type="submit">         
        Save changes
        </Button>
        </Container>
        </Form>
        </Container>
    )
  }
}
export default ChangeAddressPage;