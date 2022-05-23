import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SiProtools } from "react-icons/si";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
const Navbar = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className="rounded-md mr-2 text-secondary text-lg font-semibold p-0 px-5 "
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className="rounded-md mr-2 text-secondary text-lg font-semibold p-0 px-5"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          className="rounded-md mr-2 text-secondary text-lg font-semibold p-0 px-5"
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        {user ? (
          <button
            className="rounded-md bg-primary mr-2 text-secondary text-lg font-semibold p-0 px-5"
            onClick={logout}
          >
            Log Out
          </button>
        ) : (
          <NavLink
            to="/login"
            className="rounded-md mr-2 text-secondary text-lg font-semibold p-0 px-5"
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );

  const toggle = (
    <>
      <label class="swap swap-rotate">
        <input type="checkbox" onClick={() => setDark(!dark)} />

        <svg
          class="swap-on fill-current w-10 h-10 text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        <svg
          class="swap-off fill-current w-10 h-10 text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </>
  );
  console.log(user);
  return (
    <div class="drawer drawer-end" data-theme={dark ? "night" : "light"}>
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col font-mono">
        <div class="w-full navbar h-20 lg:px-20">
          <label
            tabindex="0"
            for="my-drawer-2"
            class="btn btn-ghost lg:hidden "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <div class="flex-1 px-2 mx-2 text-4xl font-bold text-primary">
            <SiProtools /> <span className="ml-2">Ford</span>
          </div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>

          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal gap-x-2">
              {menuItems}
              {toggle}
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          {menuItems}
          {toggle}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
