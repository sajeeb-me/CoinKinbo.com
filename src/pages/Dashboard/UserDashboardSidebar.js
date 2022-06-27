import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHistory } from 'react-icons/md';
import { AiOutlinePieChart } from 'react-icons/ai';

const UserDashboardSidebar = ({ children }) => {
    return (
        <div className="drawer drawer-mobile ">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                {children}


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="bg-base-300 menu p-4 overflow-y-auto w-52">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <NavLink
                            to='/dashboard/my-history'
                            className='text-sm'
                        >
                            <MdHistory className='text-base' />
                            Purchased History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/dashboard/my-portfolio'
                            className='text-sm'
                        >
                            <AiOutlinePieChart className='text-base' />
                            My Portfolio
                        </NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default UserDashboardSidebar;