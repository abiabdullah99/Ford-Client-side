import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const MyOrders = () => {
  const [myOrders, setmyOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const email = user.email;
    const url = `https://salty-fortress-85484.herokuapp.com/myitems?email=${email}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log("res", res);
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          Navigate("/");
        }
        return res.json();
      })
      .then((data) => setmyOrders(data));
  }, [user]);
  console.log(myOrders);

  const handleDeleteProduct = (id) => {
    const proced = window.confirm("Are Your Sure Delete Items");
    if (proced) {
      const url = `https://salty-fortress-85484.herokuapp.com/myOrders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const reamingData = myOrders.filter((product) => product._id !== id);
          setmyOrders(reamingData);
          toast.success("Your Product Succesfully deleted");
        });
    }
  };
  return (
    <div>
      <div class="overflow-x-auto mt-20">
        <table class="table w-10/12 mx-auto">
          <thead>
            <tr>
              <th className="bg-primary"></th>
              <th className="text-lg text-secondary font-semibold bg-primary">
                Name
              </th>
              <th className="text-lg text-secondary font-semibold bg-primary">
                Email
              </th>
              <th className="text-lg text-secondary font-semibold bg-primary">
                Product
              </th>
              <th className="text-lg text-secondary font-semibold bg-primary">
                Price
              </th>
              <th className="text-lg text-secondary font-semibold bg-primary">
                Pay Order
              </th>
              <th className="text-lg text-secondary font-semibold bg-primary">
                Cancel Order
              </th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((item, index) => (
              <tr className="border-2 border-primary">
                <th className="text-lg text-secondary">{index + 1}</th>
                <td className="text-lg text-secondary">
                  {item.user ? item.user : "Not Found"}
                </td>
                <td className="text-lg text-secondary">{item.email}</td>
                <td className="text-lg text-secondary">{item.product}</td>
                <td className="text-lg text-secondary">${item.price}</td>
                <td>
                  {item.price && !item.paid && (
                    <Link to={`/dashboard/payment/${item._id}`}>
                      <button className="btn btn-success btn-xs text-white">
                        Pay
                      </button>
                    </Link>
                  )}
                  {item.price && item.paid && (
                    <span className="text-primary">Paid</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteProduct(item._id)}
                    className="btn btn-warning btn-xs text-white"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
