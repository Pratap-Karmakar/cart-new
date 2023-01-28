import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    render() {
        return (
            <div className="cart">
                {/* here i'm using the same component which i've hard-coded previously in the CartItem.js */}
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }
}


export default Cart;