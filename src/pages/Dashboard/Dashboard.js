import React from 'react';
import { Outlet } from 'react-router-dom';
import UserDashboardSidebar from './UserDashboardSidebar';

const Dashboard = () => {
    return (
        <UserDashboardSidebar>
            <Outlet />
        </UserDashboardSidebar>
    );
};

export default Dashboard;