import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import UseAdmin from "../../../Hooks/UseAdmin";
const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin(user);
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col h-auto">
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80  text-base-content">
            {!admin && (
              <ul>
                <li className="mb-4 text-secondary text-lg font-semibold">
                  <NavLink to="/dashboard/myorders">My Orders</NavLink>
                </li>
                <li className="mb-4 text-secondary text-lg font-semibold">
                  <NavLink to="/dashboard/review">Add Reviews</NavLink>
                </li>
              </ul>
            )}
            <li className="text-secondary text-lg font-semibold mb-4">
              <NavLink to="/dashboard">My Profile</NavLink>
            </li>
            {admin && (
              <ul>
                <li className="text-secondary text-lg font-semibold mb-4">
                  <NavLink to="/dashboard/user">Make Admin</NavLink>
                </li>
                <li className="text-secondary text-lg font-semibold mb-4">
                  <NavLink to="/dashboard/AddProduct">Add Products</NavLink>
                </li>

                <li className="text-secondary text-lg font-semibold mb-4">
                  <NavLink to="/dashboard/manage">Manage Products</NavLink>
                </li>
                <li className="text-secondary text-lg font-semibold mb-4">
                  <NavLink to="/dashboard/manageOrder">
                    Manage All Orders
                  </NavLink>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
