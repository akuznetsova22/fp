
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function LoseWeightPage(props){
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>$35 per day</ListGroup.Item>
                <ListGroup.Item>3 meals per day</ListGroup.Item>
                <ListGroup.Item>P/C/F: 35%-45%-20%</ListGroup.Item>
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
            <Card.Title>Sweet tooth menu</Card.Title>
            <Card.Img variant="top" src={require('../images/SweetMenu.jpg')} />
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>$50 per day</ListGroup.Item>
                <ListGroup.Item>6 meals per day</ListGroup.Item>
                <ListGroup.Item>P/C/F: 35%-25%-40%</ListGroup.Item>
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
            <Card.Title>No time to lose Menu</Card.Title>
            <Card.Img variant="top" src={require('../images/expressMenu.jpg')} />
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>$45 per day</ListGroup.Item>
                <ListGroup.Item>4 meals per day</ListGroup.Item>
                <ListGroup.Item>P/C/F: 30%-50%-20%</ListGroup.Item>
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
export default LoseWeightPage;