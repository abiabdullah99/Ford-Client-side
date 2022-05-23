import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [order, setOrder] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const url = `https://salty-fortress-85484.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);
  const { name, _id, img, minorder, stock, price } = order;

  const handleBooking = (event) => {
    event.preventDefault();
    const booking = {
      productId: _id,
      product: name,
      price,
      img,
      email: user.email,
      user: event.target.name.value,
      phone: event.target.phone.value,
      minorder: event.target.minorder.value,
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
    <form
      onSubmit={handleBooking}
      className="w-9/12 mx-auto grid grid-cols-1 my-10  items-center md:grid-cols-2"
    >
      <div className="flex flex-col">
        <h1 className="text-2xl text-primary font-bold mb-5">
          Your Information
        </h1>
        <input
          type="text"
          name="name"
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
      </div>
      <div>
        <div className="mt-10">
          <img src={img} className="w-6/12" alt="" />
          <h1 className="pb-2 text-lg font-semibold text-secondary mt-4">
            <span className="text-primary">Product:</span> {name}
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
          <input
            type="text"
            name="minorder"
            placeholder="UpDate Minimum Order"
            className="rounded input input-bordered border-2 border-primary text-secondary text-lg mb-5 w-full max-w-xs"
          />
          <div className="flex gap-5 mb-10">
            <div>
              <button className="btn btn-primary btn-outline border-2 rounded text-lg mx-auto text-white">
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
      <input
        type="submit"
        value="Confirm Order"
        className="btn btn-primary  rounded text-lg mx-auto text-white w-5/12 md:mr-10 mt-5"
      />
    </form>
  );
};

export default Purchase;
