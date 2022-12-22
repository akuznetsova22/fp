import ProductList from "../ProductList.js";

function ShoppingCart(props){
    const products = props.products;
    const cart = props.cart;
    let totalPrice = 0;
    const cartProducts = [...cart.entries()].map(item => {
        const product = products.get(item.id);
        totalPrice += product.price;
        return (
            <ProductList id={1}
            title={product.title}
            price={product.price}
            deleteFromCart={props.deleteFromCart}
            key={1}/>
        )
    });
    return (
        cartProducts.length === 0?         <p >There are no items in your shopping cart</p> : 
        <>
        {cartProducts}
        <p>Total price:  ${totalPrice.toLocaleString()}</p>
        </>
    )
}
export default ShoppingCart;