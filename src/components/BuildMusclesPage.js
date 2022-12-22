import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function BuildMusclesPage(props){
    return(
        <Container fluid>
        <h2>Build muscles goal - Select your menu:</h2>
        <Container fluid>
            <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Give me greens Menu</Card.Title>
                <Card.Img variant="top" src={require('../images/Vegan.webp')} />
                <Card.Text>
                    This menu is a perfect option for vegans who want to gain some muscles. Perfectly balanced, tasty and full of plant-based protein
                </Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item>$40 per day</ListGroup.Item>
                    <ListGroup.Item>6 meals per day</ListGroup.Item>
                    <ListGroup.Item>P/C/F: 30%-20%-50%</ListGroup.Item>
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
                <Card.Title>Protein beast Menu</Card.Title>
                <Card.Img variant="top" src={require('../images/Protein.jpg')} />
                <Card.Text>
                    Rich in protein we offer perfectly balanced meals with at least 130gr of protein per day. With us your can forget about difficult food choices and counting the PFC and concentrate on your workouts
                </Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item>$55 per day</ListGroup.Item>
                    <ListGroup.Item>5 meals per day</ListGroup.Item>
                    <ListGroup.Item>P/C/F: 35%-20%-45%</ListGroup.Item>
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
                <Card.Title>Beyond food Menu</Card.Title>
                <Card.Img variant="top" src={require('../images/supplements.jpg')} />
                <Card.Text>
                     This option covers the Protein beast menu and adds all the necessary supplements on top. BCAA, whey protein, CLA... You name it!
                </Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item>$65 per day</ListGroup.Item>
                    <ListGroup.Item>6 meals per day</ListGroup.Item>
                    <ListGroup.Item>P/C/F: 40%-25%-35%</ListGroup.Item>
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
export default BuildMusclesPage;