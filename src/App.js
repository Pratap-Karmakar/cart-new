import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";


// class based component
class App extends React.Component {

  // to add state
  constructor() {
    // whenever we are using constructor in our classes we need to call super to basically call the constuructor of our parent class if we are ingeritaing
    super();
    // state is the way to store the local data for that particular component, and state is a javascript object
    this.state = {
      products: [
        {
          price: 999,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
          id: 1
        },
        {
          price: 9999,
          title: 'Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          id: 2
        },
        {
          price: 49999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
          id: 3
        }
      ]
    }
  }


  // increase quantity function
  handelIncreaseQuantity = (product) => {
    console.log('hey', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products
    })
  }

  // decrease quantity function
  handelDecreaseQuantity = (product) => {
    console.log('hey', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // if the qty is already zero then it can't be go negative that's why
    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;
    this.setState({
      products
    })
  }

  // delete product function
  handleDeleteProduct = (id) => {
    // object destructuring
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }

  // Navbar icon count functiongetCartCount 
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach(product => {
      count += product.qty
    });
    return count;
  }

  // to get the total price of the cart function
  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        {/* to add the count in the cart icon on the Navbar */}
        <Navbar count={this.getCartCount()} />
        <Cart products={products} onIncreaseQuantity={this.handelIncreaseQuantity} onDecreaseQuantity={this.handelDecreaseQuantity} onDeleteProduct={this.handleDeleteProduct} />

        <div style={{fontSize: 30, padding: 10}}>
          Total: {this.getCartTotal()}
        </div>
      </div>
    );
  }


}

export default App;
