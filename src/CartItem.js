import React from "react";




// class based component

// this is a class component and we are inheritating using the extend keyword from a class called Component inside React packege
class CartItem extends React.Component {
    // to add state
    constructor() {
        // whenever we are using constructor in our classes we need to call super to basically call the constuructor of our parent class if we are ingeritaing
        super();
        // state is the way to store the local data for that particular component, and state is a javascript object
        this.state = {
            price: "9,999",
            title: 'Phone',
            qty: 0,
            img: ''
        }
        // here we need to n=bind the state with increaseQuantity (this is manually)
        // this.increaseQuantity= this.increaseQuantity.bind(this);
        // or we can use arow function which automatically binds the state with increaseQuantity
    }
    
    // this is the function to increase the quantity, and we're gonna using this function's expression bellow in the increase quantity part of an item
    increaseQuantity = () => {
        // to increase the quantity
        // this.state.qty += 1;
        // console.log('this', this.state);
        // increaseing the quantity by using setState function which is inheritate from the React.component

        //set state form 1 by object
        // this.setState({
        //     qty : this.state.qty + 1
        // })

        //set state form 2 by creating a callback function   if previous state required the use this
        this.setState((prevState) => {
            return ({
                qty: prevState.qty + 1
            })
        });
    }
    // decrease quantity callback function
    decreaseQuantity = () => {

        // if the qty is already zero then it can't be go negative that's why
        const { qty } = this.state;
        if (qty === 0) {
            return;
        }

        this.setState((prevState) => {
            return ({
                qty: prevState.qty - 1
            })
        })
    }
    // so a class component to be a react component we need to give it a method
    render() {
        // here i'm doing object destructuring means im accessing the state object first here and then use them bellow in the right-block
        const { price, title, qty } = this.state;

        return (
            <div className="cart-item">

                <div className="left-block">
                    {/* this is how we can add style by using style property and then passing the object which is written bellow */}
                    <img style={style.image} />
                </div>
                <div className="right-block">

                    {/* we can add style by this method as well */}
                    {/* i didn't use the object destructuring in the title section insted of that i've used the normal object call by using this.state.title */}
                    <div style={{ fontSize: 25 }}>{this.state.title}</div>
                    <div style={{ color: "gray" }}>Rs: {price}</div>
                    <div style={{ color: "gray" }}>Qty: {qty}</div>

                    <div className="cart-item-actions">

                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            // here we are using the increaseQuantity function's expression
                            onClick={this.increaseQuantity.bind(this)}
                        />

                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity.bind(this)} />

                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/484/484662.png" />


                    </div>
                </div>

            </div>
        )
    }
}

// in jsx we can style our elements by using objects 

// this is the style object of the image
const style = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 5,
        background: "gray"
    }
}



export default CartItem;


