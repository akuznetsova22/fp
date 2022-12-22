import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


function ChangeAddressPage(props){
    const [newAddress, setNewAddress] = useState('');
    const [newImg, setImg] = useState('');
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();
    
    function changeAddress(){
        return Axios.post('http://localhost:3001/user/change_address',{
          id: userId,
          address: newAddress
        })
    }
    function changeImg(){
      return Axios.post('http://localhost:3001/user/change_img',{
        id: userId,
        imgSource: newImg
      })
  }
  function getSessionInfo(){
    Axios.get('http://localhost:3001/user/login')
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
      const form = event.currentTarget;
      // if (form.checkValidity() === false) {
      //   event.preventDefault();
      //   event.stopPropagation();
      // }
      if (newAddress){
        changeAddress()
      }
      if (newImg){
        changeImg()
      }
      alert('Changes saved!')
      getSessionInfo();

    };
    getSessionInfo();
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
export default ChangeAddressPage;