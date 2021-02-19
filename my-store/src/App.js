import Header from './components/Header'
import Footer from './components/Footer'
import Categories from './components/Categories'
import Status from './components/Products'
import Details from './components/ProductDetails'
import Checkout from './components/Cart'
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Categories />
          <Status />
        </Route>
        <Route path="/details/:id" component={Details} >
        </Route>
        <Route path="/checkout" component={Checkout} >
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;