import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    const navItems = [
        <NavLink to='/'>Home</NavLink>,
        <NavLink to='/coins'>Coins</NavLink>,
        <NavLink to='/news'>News</NavLink>,
        <NavLink to='/learn'>Learn</NavLink>,
        <NavLink to='/login'>Login</NavLink>,
        <NavLink to='/register'>Register</NavLink>
    ]

    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar bg-base-300">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-1 px-2 mx-2">Navbar Title</div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            {navItems}
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