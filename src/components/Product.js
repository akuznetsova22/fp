import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
function Product(props){
    const product=props.product;
    function handleBuy(e){
        e.preventDefault();
        e.addToCart(props.id);
    }
    function handleSave(e){
        e.preventDefault();
        e.addToWishlist(props.id);
    }
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">${product.title}</Card.Subtitle>
            <Card.Text>
              ${product.description}
            </Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>${product.price}</ListGroup.Item>
            </ListGroup>
            <Container fluid>
                <Row>
                    <Col md-6>
                    <Button id='btnBuy' onClick={handleBuy} variant="dark">Buy</Button>
                    </Col>
                    <Col md-6>
                    <Button id='btnSave' onClick={handleSave} variant="secondary">Save for later</Button>
                    </Col>
                </Row>
            </Container>          
            </Card.Body>
        </Card>
    )
}
export default Product;