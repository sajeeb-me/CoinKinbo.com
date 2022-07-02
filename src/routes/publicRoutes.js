import Carts from "../pages/Carts/Carts";
import Coins from "../pages/Coins/Coins";
import DetailsOfCoin from "../pages/Coins/DetailsOfCoin";
import Home from "../pages/Home/Home";
import Learn from "../pages/Learn/Learn";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ResetPassword from "../pages/Login/ResetPassword";
import News from "../pages/News/News";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";


export const publicRoutes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/coins', name: 'Coins', Component: Coins },
    { path: 'details/:id', name: 'DetailsOfCoin', Component: DetailsOfCoin },
    { path: '/news', name: 'News', Component: News },
    { path: '/learn', name: 'Learn', Component: Learn },
    { path: '/carts', name: 'Carts', Component: Carts },
    { path: '/login', name: 'Login', Component: Login },
    { path: '/register', name: 'Register', Component: Register },
    { path: '/resetpassword', name: "ResetPassword", Component: ResetPassword },
    { path: '*', name: "NotFoundPage", Component: NotFoundPage },
]