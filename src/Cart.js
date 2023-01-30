import React from "react";
import CartItem from "./CartItem";

// functional based component
const Cart=(props)=> {
    
    const { products } = props;
    return (
        <div className="cart">
            {products.map((product) => {
                // react doesn't know how to differeanciate each cart item, so giv it a key which can be anything as here it is id
                return <CartItem product={product} key={product.id} onIncreaseQuantity={props.onIncreaseQuantity} onDecreaseQuantity={props.onDecreaseQuantity} onDeleteProduct={props.onDeleteProduct} />;
            })}
        </div>
    );
    
}


export default Cart;


