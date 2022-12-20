import { Container } from 'react-bootstrap';
import Product from './Product.js'
function ProductList(props){
    const products = props.products;
    const productList = products.map(product => {
        <Product id={product.id}
        title = {product.title}
        description={product.description}
        price={product.price}
        key={product.id}></Product>
    })
    return(
        <Container fluid>
            {productList}
        </Container>
    )
}
export default ProductList;