import { Row } from "react-bootstrap";
import {Col} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function OrderHistoryRows (props){
    const products = props.products;
    const navigate = useNavigate();
    const startDates = props.startDates;
    const endDates = props.endDates;
   
    function redirect(){
    navigate('/user/account')
   }
   
    let productList = [];
    for (let i = 0; i < products.length; i++){
        productList.push(<Row>
            <Col>{i+1}</Col>
            <Col>{products[i]}</Col>
            <Col>{startDates[i].slice(0,10)}</Col>
            <Col>{endDates[i].slice(0,10)}</Col>
        </Row>)
    }
    return (
        <>
        <Row>
            <Col>#</Col>
            <Col>Menu</Col>
            <Col>Start date</Col>
            <Col>End date</Col>

        </Row>
        {productList}
        <Button onClick={redirect}>Back to account</Button>
        </>
    )
}
export default OrderHistoryRows;