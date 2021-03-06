import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L1B4TILMBFd3sQdeIP6t2YJz0HbnsXqxyG9jGmJQOBjOPN3vzKMHoAYIQTp080HttDA3dAejYgfepL4oCkgOCWr00Bn3BxCcC"
);
const Payment = () => {
  const { id } = useParams();
  const url = `https://salty-fortress-85484.herokuapp.com/myOrders/${id}`;
  const { data: order, isLoading } = useQuery("orders", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <div class="card w-50 max-w-md mx-auto mb-2 mt-28 py-4 shadow-primary shadow-md">
          <div class="card-body">
            <p className="text-primary text-xl font-bold">
              Hello, {order.user}
            </p>
            <h2 class="card-title text-secondary">
              Please Pay for {order.product}
            </h2>
            <p className="text-secondary text-lg">
              Please pay: <span className="text-primary">${order.price}</span>
            </p>
          </div>
        </div>
        <div class="card flex-shrink-0 w-50 mx-auto max-w-md shadow-primary mb-2 shadow-md bg-base-100">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
