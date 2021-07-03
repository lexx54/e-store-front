import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Categories from "./pages/Categories";
import Navegation from './components/Navegation';
import Footer from "./components/Footer";
import Register from "./pages/Register";

//Green 400 500 Blue 700 red 600
const App = () => {
  return (
    <Router>
        <Navegation />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route path="/shop/:product" component={Product}></Route>
        <Route path="/shop/categories/:category" component={Categories}></Route>
        <Route path="/register/:state" component={Register}></Route>
        {/* <Route path="/signup" component={SignUp}></Route> */}
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/payment" component={Payment}></Route>
      </Switch>
      <Footer />
    </Router>
    
  )
};

export default App;
