import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { books } from './data.js'

import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import Books from "./pages/Books.jsx";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item =>
      item.id === book.id
        ? {
          ...item,
          quantity: +quantity
        }
        : item
    ))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    })
    return counter;
  }
  
  function removeBook(book) {
    setCart(cart.filter(item => item.id !== book.id))
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Route>
          <Nav numberOfItems={numberOfItems()}/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/books' exact render={() => <Books books={books} />}></Route>
          <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />}></Route>
          <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeBook={removeBook} />}></Route>
          <Footer />
        </Route>
      </div>
    </Router>
  )
}

export default App;
