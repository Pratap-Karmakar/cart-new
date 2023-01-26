import React from "react";




// class based component

// this is a class component and we are inheritating using the extend keyword from a class called Component inside React packege
class CartItem extends React.Component {
    // so a class component to be a react component we need to give it a method
    render() {
        return (
            <div className="cart-item">

                <div className="left-block">
                    {/* this is how we can add style by using style property and then passing the object which is written bellow */}
                    <img style={style.image}/>
                </div>
                <div className="right-block">

                    {/* we can add style by this method as well */}
                    <div style={{ fontSize: 25 }}>Phone</div>
                    <div style={{ color: "gray" }}>Rs. 9,999</div>
                    <div style={{ color: "gray" }}>Qty : 1</div>

                    <div className="cart-item-actions">

                        {/* Buttons */}


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
