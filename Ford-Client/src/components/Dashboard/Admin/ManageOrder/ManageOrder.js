import React, { useEffect, useState } from "react";

const ManageOrder = () => {
  const [allORders, setAllOrders] = useState([]);
  useEffect(() => {
    const url = `https://salty-fortress-85484.herokuapp.com/myOrders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <div>
      <div>
        <div class="overflow-x-auto mt-20">
          <table class="table mx-auto">
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
              </tr>
            </thead>
            <tbody>
              {allORders.map((item, index) => (
                <tr className="border-2 border-primary">
                  <th className="text-lg text-secondary">{index + 1}</th>
                  <td className="text-lg text-secondary">
                    {item.user ? item.user : "Not Found"}
                  </td>
                  <td className="text-lg text-secondary">{item.email}</td>
                  <td className="text-lg text-secondary">{item.product}</td>
                  <td className="text-lg text-secondary">{item.price}</td>
                  <td>
                    {item.price && !item.paid && (
                      <button className="btn btn-outline btn-primary btn-sm text-secondary">
                        Un Paid
                      </button>
                    )}
                    {item.price && item.paid && (
                      <span className="text-primary font-semibold text-lg">
                        Pending
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
