import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../authentication/firebase.init';
import { signOut } from 'firebase/auth';
import { AiOutlineShopping } from 'react-icons/ai';
import { TiUser } from 'react-icons/ti';
import { FiLogOut } from 'react-icons/fi';
import { GiTwoCoins } from 'react-icons/gi';
import { MdDashboardCustomize } from 'react-icons/md';

const Navbar = ({ children, cart }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const { pathname } = useLocation();

    // console.log(cart.length);
    let quantity = 0;
    cart.forEach(coin => {
        quantity = quantity + coin.quantity;
    })

    const navItems = [
        <li><NavLink className='rounded-md' to='/'>Home</NavLink></li>,
        <li><NavLink className='rounded-md' to='/coins'>Coins</NavLink></li>,
        <li><NavLink className='rounded-md' to='/news'>News</NavLink></li>,
        <li><NavLink className='rounded-md' to='/learn'>Learn</NavLink></li>,

    ]

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/coins');
    }

    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class={`w-full navbar bg-base-300 lg:px-20 sticky top-0 z-50 ${pathname?.length <= 1 && 'hidden'}`}>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <Link to='/coins' className='flex-1 logo'>CoinKinbo</Link>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            {navItems}
                        </ul>
                    </div>
                    <div>
                        <ul class="menu menu-horizontal items-center">
                            <li className='relative mx-2'>
                                {
                                    // user &&
                                    <NavLink className='rounded-full' to='/carts'>
                                        <p className='text-2xl'><AiOutlineShopping /></p>
                                        {
                                            quantity > 0 &&
                                            <p className='absolute top-1 right-1 bg-accent bg-opacity-50 text-white px-2 py-1 text-xs rounded-full'>{quantity}</p>
                                        }
                                    </NavLink>
                                }
                            </li>
                            <li>{
                                user ?
                                    <div>
                                        <div>
                                            <div className="dropdown dropdown-end">
                                                <label tabIndex="0" className="avatar online">
                                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={'https://i.ibb.co/5sWZQdg/default-images.jpg'} alt='' />
                                                        {/* <img src={usersProfile?.image ? usersProfile?.image : 'https://i.ibb.co/5sWZQdg/default-images.jpg'} alt='' /> */}
                                                    </div>
                                                </label>
                                                <ul tabIndex="0" className="dropdown-content menu shadow bg-base-100 rounded-box w-40 lg:w-52">
                                                    <div className='px-5 pt-5 flex flex-col items-center'>
                                                        <div className="avatar">
                                                            <div className="w-16 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                                <img src={'https://i.ibb.co/5sWZQdg/default-images.jpg'} alt='' />
                                                                {/* <img src={usersProfile?.image ? usersProfile?.image : 'https://i.ibb.co/5sWZQdg/default-images.jpg'} alt='' /> */}
                                                            </div>
                                                        </div>
                                                        <div className='mt-4'>
                                                            <Link to='/profile' className='text-center font-bold hover:text-primary-focus'>
                                                                {user?.displayName}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <hr className='my-2' />

                                                    <p
                                                        onClick={() => navigate('/profile')}
                                                        className='flex items-center gap-3 py-1 px-4 mb-1 font-medium hover:bg-base-200 active:bg-base-300'>
                                                        <TiUser className='text-lg' />
                                                        My Profile
                                                    </p>
                                                    <p
                                                        onClick={() => navigate('/orders')}
                                                        className='flex items-center gap-3 py-1 px-4 mb-1 font-medium hover:bg-base-200 active:bg-base-300'>
                                                        <GiTwoCoins className='text-lg' />
                                                        My Orders
                                                    </p>
                                                    <p
                                                        onClick={() => navigate('/dashboard')}
                                                        className='flex items-center gap-3 py-1 px-4 mb-1 font-medium hover:bg-base-200 active:bg-base-300'>
                                                        <MdDashboardCustomize className='text-lg' />
                                                        Dashboard
                                                    </p>
                                                    <p
                                                        onClick={handleSignOut}
                                                        className='flex items-center gap-3 py-1 px-4 mb-4 font-medium hover:bg-base-200 active:bg-base-300'>
                                                        <FiLogOut className='text-lg' />
                                                        Sign Out
                                                    </p>
                                                </ul>
                                            </div >
                                        </div>
                                    </div>

                                    :
                                    <button className="rounded btn btn-primary btn-outline mr-5 lg:mr-0" onClick={() => navigate('/login')}>Login</button>

                            }</li >
                        </ul>


                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    {navItems}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;