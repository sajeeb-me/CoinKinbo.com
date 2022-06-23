import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { publicRoutes } from './routes/publicRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext('')

function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    AOS.init();
  })

  const addToCart = (selectedCoin) => {
    // console.log(selectedCoin)
    const newCart = [...cart, selectedCoin];
    setCart(newCart);
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
