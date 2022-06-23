import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { publicRoutes } from './routes/publicRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { createContext } from 'react';
import { addToLocalStorage } from './utilities/localStorageDB';
import useCoins from './hooks/useCoins';
import useCarts from './hooks/useCarts';

export const CartContext = createContext('')

function App() {
  const [coins] = useCoins()
  const [cart, setCart] = useCarts(coins)

  useEffect(() => {
    AOS.init();
  })

  let newCart = [];
  const addToCart = (selectedCoin) => {
    // console.log(selectedCoin)
    const exist = cart.find(coin => coin.id === selectedCoin.id);
    if (exist) {
      const rest = cart.filter(coin => coin.id !== selectedCoin.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist]
    }
    else {
      selectedCoin.quantity = 1;
      newCart = [...cart, selectedCoin];
    }
    setCart(newCart);
    addToLocalStorage(selectedCoin.id)
  }


  return (
    <CartContext.Provider value={addToCart}>
      <div className='body'>
        <Navbar cart={cart}>
          <Routes>
            {
              publicRoutes.map(({ path, Component }, index) =>
                <Route key={index} path={path} element={<Component />} />
              )
            }
          </Routes>
        </Navbar>
        <ToastContainer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
