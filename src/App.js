import { useState } from 'react';
import Header from './components/Layouts/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CardProvider from './store/cartContext';

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const cartVisibilityHandler = () => {
    setCartVisibility((prevState) => {
      setCartVisibility(!prevState);
    });
  };

  return (
    <CardProvider >
      {cartVisibility && <Cart setCartVisibility={cartVisibilityHandler}/>}
      <Header onCartVisibility={cartVisibilityHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
