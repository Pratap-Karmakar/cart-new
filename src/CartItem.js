import React from "react";




// class based component

// this is a class component and we are inheritating using the extend keyword from a class called Component inside React packege
const CartItem = (props) => {

    // here i'm doing object destructuring means im accessing the state object first here and then use them bellow in the right-block
    const { price, title, qty } = props.product;

    //here i'm doing object destructuring means i'm accessing the onIncreaseQuantity, onDecreaseQuantity and onDelete functions from the cart.js page and then gonna use those functions in the increase, decrease and delete buttons bellow
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;


    return (
        <div className="cart-item">

            <div className="left-block">
                {/* this is how we can add style by using style property and then passing the object which is written bellow */}
                <img style={style.image} />
            </div>
            <div className="right-block">

                {/* we can add style by this method as well */}
                {/* i didn't use the object destructuring in the title section insted of that i've used the normal object call by using this.state.title */}
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: "gray" }}>Rs: {price}</div>
                <div style={{ color: "gray" }}>Qty: {qty}</div>

                <div className="cart-item-actions">

                    {/* Buttons */}

                    {/* Decrease Quantity */}

                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        // here we are using the increaseQuantity function's expression
                        onClick={() => onIncreaseQuantity(product)}
                    />

                    {/* Increase Quantity */}

                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={() => onDecreaseQuantity(product)} />

                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
                        onClick={() => onDeleteProduct(product.id)} />


                </div>
            </div>

        </div>
    )
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


