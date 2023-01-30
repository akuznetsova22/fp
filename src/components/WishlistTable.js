import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import WishlistRows from './WishlistRows';
import { ProductsContext } from './ProductsContext';
import { useContext } from 'react';
function WishlistTable(props){
    const navigate = useNavigate();
    const [allProducts, setAllProducts] = useContext(ProductsContext);
    let products =[];
    let wishlistProducts = [];
    
    function redirect(){
        navigate('/category')
    }
    function fillProducts(){
        for (let i = 0; i< props.products.length; i++){
            products.push(props.products[i].product_id)
        }
        for (let i = 0; i < products.length; i++){
            for (let j = 0; j < allProducts.products.length; j++){
                if (products[i] == allProducts.products[j].id){
                    wishlistProducts.push(allProducts.products[j].Title)
                } 
            }
        }
    }
    fillProducts()
    if (!props.loading){
        return <div>Loading...</div>
    } else {
        if (!props.products.length){
            return(    
                <Container fluid>
                    <h2>Your favourites:</h2>
                    <p>There are no items in your wishlist</p>
                    <Button variant="outline-primary" type="button" onClick={redirect}>Continue Shopping
                  </Button>
                </Container>)
        } else {
            return(    
            <Container fluid>
                <h2>Your favourites:</h2>
                <Table striped bordered hover >
            <tbody>
                <WishlistRows products = {wishlistProducts}></WishlistRows>
            </tbody>
            </Table>
            </Container>)}
        }
}
export default WishlistTable;