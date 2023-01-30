import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function CategoryPage(props){
    return(
        <Container fluid>
        <h2>Select what suits your goals best:</h2>
        <Container fluid>
        <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Lose weight</Card.Title>
            <Card.Img variant="top" src={require('../images/loseWeight.jpg')} />
            <Card.Text>
                Our nutricionists created variety of menues to help you lose weight without harming your health. We provide healthy foods that tastes like that delicious unhealthy treats. Try it yourself! 
            </Card.Text>
            <Button variant="outline-primary" type="submit"><Link to='/category/loseweight/menus'
            >Explore options </Link>
            </Button>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Build Muscles</Card.Title>
            <Card.Img variant="top" src={require('../images/buildMuscle.jpg')} />
            <Card.Text>
                Our selection of menus will help you getting those muscles growing. Each menu group offers at least 100gr of protein per day.
            </Card.Text>
            <Button variant="outline-primary" type="submit"><Link to='/category/buildmuscle/menus'
            >Explore options </Link>
            </Button>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>I hate cooking</Card.Title>
            <Card.Img variant="top" src={require('../images/lazy.jpg')} />
            <Card.Text>
                Hate spending hours preparing your food? We got you! Full daily menus are prepared by our chefs and are waiting for you. PS. now you dont need to care about washing dishes either
            </Card.Text>
            <Button variant="outline-primary" type="submit"><Link to='/category/lazy/menus'
            >Explore options </Link>
            </Button>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        </Container>
    )
}
export default CategoryPage;