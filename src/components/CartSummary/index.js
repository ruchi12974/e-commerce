import {Link} from 'react-router-dom'
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListItemAmount = cartList.map(
        eachItem => eachItem.price * eachItem.quantity,
      )
      const totalAmount = [cartListItemAmount]
      return (
        <div className="total-amount-container">
          <h1 className="order-total-text">
            Order Total:{' '}
            <span className="total-amount">Rs {totalAmount.join()}/- </span>
          </h1>
          <p className="no-of-items">{cartList.length} Items in cart</p>
          <Link to="/checkout">
          <button className="checkout-button" type="button">
            Checkout
          </button>
          </Link>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary