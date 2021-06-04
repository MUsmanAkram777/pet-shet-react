import {
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer'
import Header from './components/Header'
import './css/style.css'
import Collection from "./pages/Collection";
import Home from './pages/Home';
import SingleAnimalDetails from './components/SingleAnimalDetails'
import Cart from './pages/Cart'
import CartProvider from './context/CartContext'


function App() {
  return (
    <CartProvider>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/collection" component={Collection}/>
        <Route exact path="/single/:id" component={SingleAnimalDetails}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
      <Footer/>
    </CartProvider>
    
  );
}

export default App;
