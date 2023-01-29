import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {

    // to add state
    constructor() {
        // whenever we are using constructor in our classes we need to call super to basically call the constuructor of our parent class if we are ingeritaing
        super();
        // state is the way to store the local data for that particular component, and state is a javascript object
        this.state = {
            products: [
                {
                    price: "999",
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: "9,999",
                    title: 'Phone',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: "49,999",
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 3
                }
            ]
        }
        // here we need to n=bind the state with increaseQuantity (this is manually)
        // this.increaseQuantity= this.increaseQuantity.bind(this);
        // or we can use arow function which automatically binds the state with increaseQuantity
    }

    // increase quantity function
    handelIncreaseQuantity = (product) =>{
        console.log('hey', product);
        const {products}= this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            products
        })
    }
    handelDecreaseQuantity = (product) =>{
        console.log('hey',product);
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    // react doesn't know how to differeanciate each cart item, so giv it a key which can be anything as here it is id
                    return <CartItem product={product} key={product.id} onIncreaseQuantity={this.handelIncreaseQuantity}/>;
                })}
            </div>
        );
    }
}


export default Cart;


