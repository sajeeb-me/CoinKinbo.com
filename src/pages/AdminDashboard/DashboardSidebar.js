import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaList } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';

const DashboardSidebar = ({ children }) => {
    return (
        <div className="drawer drawer-mobile ">
            <input id="adminDashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                {children}


            </div>
            <div className="drawer-side">
                <label htmlFor="adminDashboard-drawer" className="drawer-overlay"></label>
                <ul className="bg-base-300 menu p-4 overflow-y-auto w-56">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <NavLink to='/admin-dashboard/manage-orders'>
                            <FaList className='text-lg' />
                            Manage all orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin-dashboard/admin-and-user'>
                            <FiUsers className='text-lg' />
                            Admins &amp; Users
                        </NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardSidebar;