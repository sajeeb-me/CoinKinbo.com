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
import PrivateRoute from './authentication/PrivateRoute';
import Payment from './pages/Payment/Payment';
import Profile from './pages/Profile/Profile';
import Orders from './pages/Orders/Orders';
import Dashboard from './pages/Dashboard/Dashboard';
import PageLoading from './components/PageLoading';

export const CartContext = createContext('')

function App() {
  const [listCoins, isLoading, refetch] = useCoins()
  const [cart, setCart] = useCarts(listCoins)
  // console.log(listCoins);
  // console.log(cart);

  useEffect(() => {
    AOS.init();
  })

  if (isLoading) {
    return <PageLoading />
  }

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
    refetch()
  }


  return (
    <CartContext.Provider value={addToCart}>
      <div className='body'>
        <Navbar cart={cart}>
          <Routes>
            {
              publicRoutes.map(({ path, Component }, index) =>
                <Route key={index} path={path} element={<Component cart={cart} refetch={refetch} />} />
              )
            }
            <Route element={<PrivateRoute />}>
              <Route path='/payment' element={<Payment cart={cart} refetch={refetch} />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
        </Navbar>
        <ToastContainer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
