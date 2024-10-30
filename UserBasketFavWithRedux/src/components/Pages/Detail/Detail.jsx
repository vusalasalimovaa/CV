import React, { useEffect } from "react";
import { getAllDatas } from "../../../services";
import { endPoints } from "../../../services/api";

const Detail = ({ state, dispatch }) => {
  useEffect(() => {
    getAllDatas(endPoints.products).then((data) => {
      console.log(data);

      dispatch({
        type: "SET_PRODUCTS",
        products: data,
      });
    });
  }, []);

  return (
    <>
      <div>
        {state.products.map((elem) => {
          return (
            <>
              {/* component */}
              <div className="flex min-h-screen items-center justify-center">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                      src={elem.image}
                      alt="image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                      {elem.title}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {elem.category}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                      {elem.description}
                    </p>

                    <p>Price : ${elem.price}</p>
                    <p>Rate : {elem.rating.rate}</p>
                    <p>Count : {elem.rating.count}</p>
                  </div>
                </div>
                {/* stylesheet */}
                <link
                  rel="stylesheet"
                  href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Detail;
