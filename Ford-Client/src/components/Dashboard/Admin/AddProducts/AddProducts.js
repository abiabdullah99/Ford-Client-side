import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  const onSubmitProdutFrom = (data) => {
    fetch("https://salty-fortress-85484.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Your Product Succesfull Added");
      });
    reset();
  };
  return (
    <div>
      <div className="text-center font-mono mt-20 mb-10 h-full">
        <h2 className="text-4xl font-semibold text-primary">Add Products</h2>
        <form
          className="flex flex-col w-80 mx-auto mt-20 form"
          onSubmit={handleSubmit(onSubmitProdutFrom)}
        >
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Product Photo Url"
            type="text"
            {...register("img")}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            name="name"
            placeholder="Product Name"
            {...register("name", { required: true })}
          />
          <input
            className="w-80 rounded  border-2 border-primary  mb-5 py-4 px-10"
            value={user.email}
            {...register("email", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-solid border-primary  mb-5 py-4 px-10"
            placeholder="Enter Price"
            type="number"
            {...register("price", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-solid border-primary  mb-5 py-4 px-10"
            placeholder="Enter Product Stock"
            type="number"
            {...register("stock", { required: true })}
          />

          <input
            className="w-80 rounded border-2 border-solid border-primary  mb-5 py-4 px-10"
            placeholder="Enter Minimum Order"
            type="number"
            {...register("min-order", { required: true })}
          />
          <input
            className="w-80 rounded border-2  border-primary  mb-5 py-4 px-10"
            placeholder="description"
            type="text"
            {...register("description", { required: true })}
          />
          <input
            className="product-btn rounded bg-primary py-4 text-white text-xl"
            type="Submit"
            value="Post Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
