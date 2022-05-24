import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import axios from "axios";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [order, setOrder] = useState([]);
  const [newData, setNewData] = useState(false);
  const [stockNumber, setStockNumber] = useState({
    stock: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const url = `https://salty-fortress-85484.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id, newData]);

  let name, value;
  const getUserData = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setStockNumber({ ...stockNumber, [name]: value });
  };
  const { _id, img, minorder, stock, price } = order;

  const handleUpdateStock = async (id, stock) => {
    const { stockitem } = stockNumber;
    console.log(stockitem);
    console.log(stock)
    const getStock = parseInt(stock) - parseInt(stockitem);
    const newQuantity = {
      stock: getStock.toString(),
    };
    console.log(newQuantity);
    const url = `https://salty-fortress-85484.herokuapp.com/products/${id}`;
    await axios.put(url, newQuantity).then((response) => {
      const { data } = response;
      if (data) {
        setNewData(!newData);
      }
      console.log(data);
    });
  };

  const handleBooking = (event) => {
    event.preventDefault();
    const booking = {
      productId: _id,
      product: order.name,
      price,
      img,
      email: user.email,
      user: user.displayName,
      phone: event.target.phone.value,
      address: event.target.address.value,
      stock,
    };
    fetch("https://salty-fortress-85484.herokuapp.com/myOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Proudct Succesfull Added, Check Collection");
      });
  };
  return (
    <div className="grid grid-cols-1 my-10 w-10/12 mx-auto items-center lg:grid-cols-2">
      <form onSubmit={handleBooking} className="flex flex-col">
        <input
          type="text"
          name="name"
          value={user?.displayName}
          placeholder="Enter Your Name"
          className="rounded input input-bordered border-2 border-primary text-secondary text-lg mb-5 w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          readOnly
          value={user?.email || ""}
          className="rounded input input-bordered border-2 border-primary text-secondary text-lg mb-5 w-full max-w-xs"
        />
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          className="rounded input input-bordered border-2 border-primary text-secondary text-lg mb-5 w-full max-w-xs"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="rounded input input-bordered border-2 border-primary text-secondary text-lg mb-5 w-full max-w-xs"
        />
        <input
          type="submit"
          value="Confirm Order"
          className="btn btn-primary rounded text-lg text-white w-5/ w-full max-w-xs"
        />
      </form>
      <div>
        <div className="mt-10">
          <img src={img} className="w-6/12" alt="" />
          <h1 className="pb-2 text-lg font-semibold text-secondary mt-4">
            <span className="text-primary">Product:</span> {order.name}
          </h1>
          <h1 className="pb-2 text-lg font-semibold text-secondary">
            <span className="text-primary">Price:</span> ${price}
          </h1>
          <h1 className="pb-2 text-lg font-semibold text-secondary">
            <span className="text-primary">Stock:</span> {stock} Pieces
          </h1>
          <h1 className="pb-2 text-lg font-semibold text-secondary">
            <span className="text-primary">Minimum Order:</span> {minorder}{" "}
            Pieces
          </h1>
        </div>

        <div>
          <input
            type="text"
            name="stock"
            onChange={getUserData}
            placeholder="UpDate Minimum Order"
            className="rounded input input-bordered border-2 border-primary text-secondary text-lg mb-5 w-full max-w-xs"
          />
          <div className="flex gap-5 mb-10">
            <div>
              <button
                onClick={() => handleUpdateStock(_id, order.stock)}
                className="btn btn-primary btn-outline border-2 rounded text-lg mx-auto text-white"
              >
                increase
              </button>
            </div>
            <div>
              <button className="btn btn-primary btn-outline border-2 rounded text-lg mx-auto text-white">
                decrease
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
