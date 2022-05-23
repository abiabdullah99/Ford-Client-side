import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li className="mb-4 text-secondary text-lg font-semibold">
              <NavLink to="/dashboard">My Orders</NavLink>
            </li>
            <li className="mb-4 text-secondary text-lg font-semibold">
              <NavLink to="/dashboard/review">Add Reviews</NavLink>
            </li>
            <li className="text-secondary text-lg font-semibold">
              <NavLink to="/dashboard/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
