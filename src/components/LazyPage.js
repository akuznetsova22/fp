import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import API from "../api/api.js";
import {useState } from "react";
import { useNavigate } from 'react-router-dom';


function LazyPage(props){
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
        <h2>I hate cooking - Select your menu:</h2>
        <Container fluid>
        <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Carb me up! Menu</Card.Title>
            <Card.Img variant="top" src={require('../images/carbs.jpg')} />
            <Card.Text>
                Cannot live without carbs? You are in luck. We provide a wide variety of healthy carbs that will perfectly fit into your daily meals
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>$55 per day</ListGroup.Item>
                <ListGroup.Item>6 meals per day</ListGroup.Item>
                <ListGroup.Item>P/C/F: 20%-30%-50%</ListGroup.Item>
                </ListGroup>
            <Container fluid>
                <Row>
                    <Col md-6>
                    <Button variant="primary" value='Carb me up! Menu' onClick={addOrder}>Add to Cart</Button>
                    </Col>
                    <Col md-6>
                    <Button variant="secondary" value='Carb me up! Menu' onClick={addWishlist}>Save for later</Button>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Gastronomic tour Menu</Card.Title>
            <Card.Img variant="top" src={require('../images/mix-foods.jpg')} />
            <Card.Text>
                Indulge into the rich world of international cuisine. Italian, Korean, French... All on your table daily at a click of your fingers
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>$60 per day</ListGroup.Item>
                <ListGroup.Item>4 meals per day</ListGroup.Item>
                <ListGroup.Item>P/C/F: 25%-40%-35%</ListGroup.Item>
                </ListGroup>
            <Container fluid>
                <Row>
                    <Col md-6>
                    <Button variant="primary" value='Gastronomic tour Menu' onClick={addOrder}>Add to Cart</Button>
                    </Col>
                    <Col md-6>
                    <Button variant="secondary" value='Gastronomic tour Menu' onClick={addWishlist}>Save for later</Button>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Surprise Menu</Card.Title>
            <Card.Img variant="top" src={require('../images/surprise.webp')} />
            <Card.Text>
                Feeling adventurous? Our chefs have prepared a surprise menu for you. Prepare to get your mind blown by our delicatesses.
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>$60 per day</ListGroup.Item>
                <ListGroup.Item>4 meals per day</ListGroup.Item>
                <ListGroup.Item>P/C/F: 30%-35%-35%</ListGroup.Item>
            </ListGroup>
            <Container fluid>
                <Row>
                    <Col md-6>
                    <Button variant="primary" value='Surprise Menu' onClick={addOrder}>Add to Cart</Button>
                    </Col>
                    <Col md-6>
                    <Button variant="secondary" value='Surprise Menu' onClick={addWishlist}>Save for later</Button>
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
export default LazyPage;