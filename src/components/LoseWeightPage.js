
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import API from "../api/api.js";
import {useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoseWeightPage(props){
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const navigate=useNavigate();
    const api = new API();

    api.checkLogin().then((response) => {
      if (response.data.userLoggedIn) {
        setUserLoggedIn(true);
      }
    });
    async function addOrder(e){
        if (!userLoggedIn){
            navigate('/user/login')
        } else {
            await api.addOrder(e.target.value);
            alert('Product added to your shopping cart!')
        }
    };

    async function addWishlist(e){
        if (!userLoggedIn){
            navigate('/user/login')
        } else {
            await api.addWishlist(e.target.value);
            alert('Product added to your wishlist!')
        }
    };

    return(
        <Container fluid>
        <h2>Lose weight goal - Select your menu:</h2>
        <Container fluid>
        <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>I need a detox! Menu</Card.Title>
            <Card.Img variant="top" src={require('../images/smoothies.jpg')} />
            <Card.Text>
                Collection of smoothies and greens carefully selected by our nutrisionists are exactly what you need to feel light and release all that daily stress
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>$35 per day</ListGroup.Item>
                <ListGroup.Item>3 meals per day</ListGroup.Item>
                <ListGroup.Item>P/C/F: 35%-45%-20%</ListGroup.Item>
            </ListGroup>
            <Container fluid>
                <Row>
                    <Col md-6>
                    <Button variant="primary" value='I need a detox! Menu' onClick={addOrder}>Add to Cart</Button>
                    </Col>
                    <Col md-6>
                    <Button variant="secondary"value='I need a detox! Menu' onClick={addWishlist}>Save for later</Button>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Sweet tooth menu</Card.Title>
            <Card.Img variant="top" src={require('../images/SweetMenu.jpg')} />
            <Card.Text>
                Think you need to cut all the sweets and eat nothing but boring broccoli to lose weight? You cannot be more wrong! We will show you that healthy treats taste even better!
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>$50 per day</ListGroup.Item>
                <ListGroup.Item>6 meals per day</ListGroup.Item>
                <ListGroup.Item>P/C/F: 35%-25%-40%</ListGroup.Item>
            </ListGroup>
            <Container fluid>
                <Row>
                    <Col md-6>
                    <Button variant="primary" value='Sweet tooth Menu' onClick={addOrder}>Add to Cart</Button>
                    </Col>
                    <Col md-6>
                    <Button variant="secondary"value='Sweet tooth Menu' onClick={addWishlist}>Save for later</Button>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>No time to lose Menu</Card.Title>
            <Card.Img variant="top" src={require('../images/expressMenu.jpg')} />
            <Card.Text>
                Got a wedding coming in a few month? Big vacation on the beach? Need results fast? We got you. Our team made sure to provide a safe express menu that will help you shread those cm fast.
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>$45 per day</ListGroup.Item>
                <ListGroup.Item>4 meals per day</ListGroup.Item>
                <ListGroup.Item>P/C/F: 30%-50%-20%</ListGroup.Item>
            </ListGroup>
            <Container fluid>
                <Row>
                    <Col md-6>
                    <Button variant="primary" value='No time to lose Menu' onClick={addOrder}>Add to Cart</Button>
                    </Col>
                    <Col md-6>
                    <Button variant="secondary" value='No time to lose Menu' onClick={addWishlist}>Save for later</Button>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        </Container>
    )
}
export default LoseWeightPage;