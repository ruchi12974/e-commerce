/* import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import EmptyCartView from './components/EmptyCartView'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'
import CheckoutPage from './components/CheckoutPage'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  incrementCartItemQuantity = id => {
    const {cartList} = this.state
    const quantityIncreasedList = cartList.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, quantity: eachItem.quantity + 1}
      }
      return {...eachItem}
    })
    this.setState({cartList: quantityIncreasedList})
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    let quantityDecreasedList
    const filteredListForQuantity = cartList.find(
      eachItem => eachItem.id === id,
    )
    if (filteredListForQuantity.quantity === 1) {
      quantityDecreasedList = cartList.filter(eachItem => eachItem.id !== id)
    } else {
      quantityDecreasedList = cartList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, quantity: eachItem.quantity - 1}
        }
        return {...eachItem}
      })
    }
    this.setState({cartList: quantityDecreasedList})
  }

  
    addCartItem = (product, quantity) => {
      const { cartList } = this.state;
      const existingItem = cartList.find(eachItem => eachItem.id === product.id);
    
      if (existingItem) {
        // If item exists, update its quantity
        const updatedCartList = cartList.map(eachItem => {
          if (eachItem.id === product.id) {
            return { ...eachItem, quantity: eachItem.quantity + quantity };
          }
          return eachItem;
        });
        this.setState({ cartList: updatedCartList });
      } else {
        // If item is new, add it to the cart
        const newCartItem = { ...product, quantity };
        this.setState(prevState => ({
          cartList: [...prevState.cartList, newCartItem],
        }));
      }
    }

  removeCartItem = id => {
    const {cartList} = this.state
    if (cartList.length === 0) {
      return <EmptyCartView />
    }
    const filteredList = cartList.filter(eachItem => eachItem.id !== id)
    this.setState({cartList: [...filteredList]})
    return null
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/checkout" component={CheckoutPage}/>
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App */ 
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import EmptyCartView from './components/EmptyCartView'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'
import CheckoutPage from './components/CheckoutPage'
import AdminPage from './components/AdminPage'  // Import the admin page
import './App.css'

class App extends Component {
  state = {
    cartList: [],
    userRole: 'user', // Default role is set to 'user', but will change after login
  }

  // Cart functionalities (kept unchanged)
  
  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  incrementCartItemQuantity = id => {
    const {cartList} = this.state
    const quantityIncreasedList = cartList.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, quantity: eachItem.quantity + 1}
      }
      return {...eachItem}
    })
    this.setState({cartList: quantityIncreasedList})
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    let quantityDecreasedList
    const filteredListForQuantity = cartList.find(
      eachItem => eachItem.id === id,
    )
    if (filteredListForQuantity.quantity === 1) {
      quantityDecreasedList = cartList.filter(eachItem => eachItem.id !== id)
    } else {
      quantityDecreasedList = cartList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, quantity: eachItem.quantity - 1}
        }
        return {...eachItem}
      })
    }
    this.setState({cartList: quantityDecreasedList})
  }

  addCartItem = (product, quantity) => {
    const { cartList } = this.state
    const existingItem = cartList.find(eachItem => eachItem.id === product.id)

    if (existingItem) {
      const updatedCartList = cartList.map(eachItem => {
        if (eachItem.id === product.id) {
          return { ...eachItem, quantity: eachItem.quantity + quantity }
        }
        return eachItem
      })
      this.setState({ cartList: updatedCartList })
    } else {
      const newCartItem = { ...product, quantity }
      this.setState(prevState => ({
        cartList: [...prevState.cartList, newCartItem],
      }))
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    if (cartList.length === 0) {
      return <EmptyCartView />
    }
    const filteredList = cartList.filter(eachItem => eachItem.id !== id)
    this.setState({cartList: [...filteredList]})
    return null
  }

  setUserRole = role => {
    this.setState({userRole: role})
  }

  render() {
    const {cartList, userRole} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          userRole,
          setUserRole: this.setUserRole,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          {/* Public Routes */}
          <Route exact path="/login" component={LoginForm} />

          {/* Private Routes for Regular Users */}
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute exact path="/products/:id" component={ProductItemDetails} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/checkout" component={CheckoutPage} />

          {/* Admin Routes */}
          {userRole === 'admin' && (
            <ProtectedRoute exact path="/admin" component={AdminPage} />
          )}

          {/* Fallback Route */}
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App