import React from "react";
import useProducts from "../../../../Hooks/UseProducts";

const AllProducts = () => {
  const [product] = useProducts();
  const reverse = [...product].reverse();
  return (
    <div>
      <div>
        <h2 className="text-center text-4xl font-bold text-primary">
          All{" "}
          <span className="border-primary border-b-4 text-secondary">
            Products
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-20 mt-20 mb-10">
          {reverse.map((item) => (
            <div key={item._id}>
              <div class="card w-10/12 mx-auto mb-10 shadow-primary rounded shadow-md relative lg:h-[620px]">
                <figure class="px-10 pt-10">
                  <img
                    src={item.img}
                    alt="Shoes"
                    class="rounded-xl h-64 w-72"
                  />
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
                    {item.description.slice(0, 40)}...
                  </p>
                </div>
                <div>
                  <button className="w-full bg-primary absolute bottom-0 py-2 mx-0 text-white text-xl font-bold">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
