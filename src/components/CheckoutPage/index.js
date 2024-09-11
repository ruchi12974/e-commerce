import React, { Component } from 'react';
import CartListView from '../CartListView'  // Existing cart view component
import CartContext from '../../context/CartContext';
import './index.css';

class CheckoutPage extends Component {
  state={orderConfirmed: false}

  handleConfirmOrder = () => {
    this.setState({ orderConfirmed: true });
  };

  render() {
    return <CartContext.Consumer>
        {value => {
            const {cartList} = value 
            const { orderConfirmed } = this.state;
            const cartListItemAmount = cartList.map(
                eachItem => eachItem.price * eachItem.quantity,
              )
              const totalAmount = [cartListItemAmount]
    if (orderConfirmed) {
      return (
        <div className="checkout-container">
          <div className="order-confirmation">
            <h2>Thank you for your order!</h2>
            <p>Your order has been placed successfully. You will receive a confirmation email shortly.</p>
          </div>
        </div>
      );
    }
    return (
      <div className="checkout-container">
        <div className="checkout-header">
          <h1>Review Your Cart</h1>
        </div>
        <div className="cart-list-container">
          {/* Using the existing CartListView to display the cart items */}
          <CartListView />
        </div>
        <div className="cart-summary">
          <p className="total">Total: {totalAmount.join()}/- </p>
        </div>
        <button className="confirm-order-button" onClick={this.handleConfirmOrder}>
          Confirm Order
        </button>
      </div>
    );
        }}
    </CartContext.Consumer>

  }
}

export default CheckoutPage;