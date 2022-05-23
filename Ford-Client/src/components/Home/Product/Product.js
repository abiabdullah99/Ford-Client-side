import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useProducts from "../../../Hooks/UseProducts";
const Product = () => {
  const [product] = useProducts();
  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-48 text-primary">
        Latest{" "}
        <span className="border-primary border-b-4 text-secondary">
          Products
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-32 mt-20 mb-10 ">
        {product.map((item) => (
          <div key={item._id}>
            <div class="card w-10/12 mx-auto mb-10 shadow-primary rounded shadow-md relative lg:h-[620px]">
              <figure class="px-10 pt-10">
                <img src={item.img} alt="Shoes" class="rounded-xl" />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-secondary">
                  {item.name}
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-lg text-secondary font-semibold">
                  Per Piece:{" "}
                  <span className="text-primary ">${item.price}</span>
                </p>
                <p className="text-lg text-secondary font-semibold">
                  Stock:{" "}
                  <span className="text-primary">{item.stock} Pieces</span>
                </p>
                <p className="text-lg text-secondary font-semibold">
                  Min Order:{" "}
                  <span className="text-primary">{item.minorder} Pieces</span>
                </p>
                <p className="text-secondary mb-8 font-semibold">
                  {item.description.slice(0, 45)}
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigateToDetails(item._id)}
                  className="w-full bg-primary absolute bottom-0 py-2 mx-0 text-white text-xl font-bold"
                >
                  <Link to="/purchase">Order Now</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
