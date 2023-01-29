import React from 'react';


// function based component

// this is a class component and we are inheritating using the extend keyword from a class called Component inside React packege

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="cart-icon" />
        <span style={styles.cartCount}>6</span>
      </div>
    </div>
  );
}


// in jsx we can style our elements by using objects 

// this is the style object of the image

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};


export default Navbar;