import React from "react";
import error from "../../../Assets/Banner/error.svg";
const NotFound = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse px-10">
          <img src={error} className="w-6/12" alt="" />
          <div>
            <h1 class="text-5xl font-bold text-primary">Error 404</h1>
            <p class="py-6 text-3xl text-secondary font-semibold">
              Oops! The page you're looking for isn't here.
            </p>
            <p className="text-2xl text-secondary"> You might have the wrong address, or the page may have moved</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
