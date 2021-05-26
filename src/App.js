import React from 'react'
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Products from './products/products'
// import Cart from './Cart/Cart'

function App() {


  return (
    <Router>
      <div className = "App">
        <Switch>
        {/* <Route path = "/checkout">
          <Header />
            <Cart />
            <Footer />
          </Route> */}
          <Route path = "/products">
          <Header />
            <Products />
            <Footer />
          </Route>
          <Route path = "/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
