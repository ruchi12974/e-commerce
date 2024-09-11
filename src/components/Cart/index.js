import Cookies from 'js-cookie'
import Header from '../Header'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = props => {
  const {history} = props
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    history.replace('/login')
  }
  return (
    <CartContext.Consumer>
      {value => {
        const {cartList, removeAllCartItems} = value
        const showEmptyView = cartList.length === 0
        
        const onClickRemoveAllItems = () => {
          removeAllCartItems()
        }
        return (
          <>
            <Header />
            <div className="cart-container">
              {showEmptyView ? (
                <EmptyCartView />
              ) : (
                <>
                  <div className="cart-content-container">
                    <div className="remove-button-heading-container">
                    <h1 className="cart-heading">My Cart</h1>
                    <button
                      type="button"
                      className="remove-all-button"
                      onClick={onClickRemoveAllItems}
                    >
                      Remove All
                    </button>
                    </div>
                    <CartListView />
                    
                    <CartSummary />
                  </div>
                </>
              )}
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}
export default Cart