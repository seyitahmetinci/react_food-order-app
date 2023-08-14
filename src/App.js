import logo from './logo.svg';
import './App.css';
import Header from "./components/Layout/Header";
import {Fragment, useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CardProvider from "./store/CardProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
      setCartIsShown(true);
    };

    const hideCartHandler = () => {
      setCartIsShown(false);
    };

  return (
    <CardProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
        <main>
            <Meals/>
        </main>
    </CardProvider>
  );
}

export default App;
