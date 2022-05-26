import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Account/Login/Login";
import Signup from "./components/Account/Signup/Signup";
import Blogs from "./components/Home/Blogs/Blogs";
import Home from "./components/Home/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import PrivateRoute from "./components/Account/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Purchase from "./components/Order/Purchase";
import NotFound from "./components/Shared/NotFound/NotFound";
import DashBoard from "./components/Dashboard/DashBoard/DashBoard";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import MyProfile from "./components/Dashboard/MyProfile/MyProfile";
import MyOrders from "./components/Dashboard/MyOrder/MyOrders";
import User from "./components/Dashboard/Admin/User/User";
import RequirAdmin from "./components/Dashboard/Admin/RequirAdmin";
import AddProducts from "./components/Dashboard/Admin/AddProducts/AddProducts";
import AllProducts from "./components/Dashboard/Admin/AllProducts/AllProducts";
import ManageOrder from "./components/Dashboard/Admin/ManageOrder/ManageOrder";
import Payment from "./components/Dashboard/Payment/Payment";
import Shop from "./components/Shop/Shop";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  AOS.init();
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/purchase/:id"
            element={
              <PrivateRoute>
                <Purchase />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/shop"
            element={
              <PrivateRoute>
                <Shop />
              </PrivateRoute>
            }
          ></Route>
          {/* Dashboard part  */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          >
            <Route path="review" element={<AddReview />}></Route>
            <Route path="payment/:id" element={<Payment />}></Route>
            <Route index element={<MyProfile />}></Route>
            <Route path="myorders" element={<MyOrders />}></Route>
            <Route
              path="user"
              element={
                <RequirAdmin>
                  <User />
                </RequirAdmin>
              }
            ></Route>
            <Route
              path="AddProduct"
              element={
                <RequirAdmin>
                  <AddProducts />
                </RequirAdmin>
              }
            ></Route>
            <Route
              path="manage"
              element={
                <RequirAdmin>
                  <AllProducts />
                </RequirAdmin>
              }
            ></Route>
            <Route
              path="manageOrder"
              element={
                <RequirAdmin>
                  <ManageOrder />
                </RequirAdmin>
              }
            ></Route>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </Navbar>
    </div>
  );
};

export default App;
