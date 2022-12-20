
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function LazyPage(props){
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>$55 per day</ListGroup.Item>
                <ListGroup.Item>6 meals per day</ListGroup.Item>
                <ListGroup.Item>P/C/F: 20%-30%-50%</ListGroup.Item>
                </ListGroup>
            <Container fluid>
                <Row>
                    <Col md-6>
                    <Button variant="primary">Add to Cart</Button>
                    </Col>
                    <Col md-6>
                    <Button variant="secondary">Save for later</Button>
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>$60 per day</ListGroup.Item>
                <ListGroup.Item>4 meals per day</ListGroup.Item>
                <ListGroup.Item>P/C/F: 25%-40%-35%</ListGroup.Item>
                </ListGroup>
            <Container fluid>
                <Row>
                    <Col md-6>
                    <Button variant="primary">Add to Cart</Button>
                    </Col>
                    <Col md-6>
                    <Button variant="secondary">Save for later</Button>
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>$60 per day</ListGroup.Item>
                <ListGroup.Item>4 meals per day</ListGroup.Item>
                <ListGroup.Item>P/C/F: 30%-35%-35%</ListGroup.Item>
            </ListGroup>
            <Container fluid>
                <Row>
                    <Col md-6>
                    <Button variant="primary">Add to Cart</Button>
                    </Col>
                    <Col md-6>
                    <Button variant="secondary">Save for later</Button>
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