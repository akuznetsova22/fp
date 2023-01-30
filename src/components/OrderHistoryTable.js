import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import OrderHistoryRows from './OrderHistoryRows';
import { ProductsContext } from './ProductsContext';
import { useContext } from 'react';
function OrderHistoryTable(props){
    const navigate = useNavigate();
    const [allProducts, setAllProducts] = useContext(ProductsContext);
    
    let products =[];
    let orders = [];
    let startDates =[];
    let endDates = [];
    
    function redirect(){
        navigate('/category')
    }
    function fillProducts(){
        for (let i = 0; i< props.products.length; i++){
            products.push(props.products[i].Product_id)
            startDates.push(props.products[i].Start_Date)
            endDates.push(props.products[i].End_Date)
        }
        for (let i = 0; i < products.length; i++){
            for (let j = 0; j < allProducts.products.length; j++){
                if (products[i] == allProducts.products[j].id){
                    orders.push(allProducts.products[j].Title)
                } 
            }
        }
    }
    fillProducts();

    if (!props.loading){
        return <div>Loading...</div>
    } else {
        if (!props.products.length){
            return(    
                <Container fluid>
                    <h2>Your orders:</h2>
                    <p>There are no previous orders</p>
                    <Button variant="outline-primary" type="button" onClick={redirect}>Continue Shopping
                  </Button>
                </Container>)
        } else {
            return(    
            <Container fluid>
                <h2>Your orders:</h2>
                <OrderHistoryRows startDates = {startDates} endDates={endDates} products = {orders}></OrderHistoryRows>            
            </Container>)}
        }
}
export default OrderHistoryTable;