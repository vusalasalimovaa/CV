import React, { useEffect, useState } from "react";
import { getDataById, patchById } from "../../../services";
import { endPoints } from "../../../services/api";
import { useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: "",
    title: "",
    price: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
  });
  useEffect(() => {
    axios.get(`http://localhost:3000/products/` + id).then((res) => {
      setValues({
        ...values,
        id: res.data.id,
        title: res.data.title,
        price: res.data.price,
        category: res.data.category,
        image: res.data.image,
        rate: res.data.rating.rate,
        count: res.data.rating.count,
      });
    });
  }, []);

  return (
    <>
      {/* component */}
      <div className="flex items-center justify-center p-12">
        {/* Author: FormBold Team */}
        {/* Learn More: https://formbold.com */}
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Id
              </label>
              <input
                value={values.id}
                onChange={(e) => {
                  setValues({ ...values, id: e.target.value });
                }}
                type="text"
                name="id"
                placeholder="id"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Title
              </label>
              <input
                onChange={(e) => {
                  setValues({ ...values, title: e.target.value });
                }}
                value={values.title}
                type="text"
                name="title"
                placeholder="title"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Price
              </label>
              <input
                onChange={(e) => {
                  setValues({ ...values, price: e.target.value });
                }}
                value={values.price}
                type="number"
                name="price"
                placeholder="Price"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Category
              </label>
              <input
                onChange={(e) => {
                  setValues({ ...values, category: e.target.value });
                }}
                value={values.category}
                type="text"
                name="category"
                placeholder="Category"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Image
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                value={""}
                type="file"
                name="image"
                placeholder="Image"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Rate
              </label>
              <input
                onChange={(e) => {
                  setValues({ ...values, rate: e.target.value });
                }}
                value={values.rating.rate}
                type="number"
                name="rate"
                placeholder="Rate"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Count
              </label>
              <input
                onChange={(e) => {
                  setValues({ ...values, count: e.target.value });
                }}
                value={values.rating.count}
                type="number"
                name="count"
                placeholder="Count"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  patchById(endPoints.products, id, values);
                  // axios.patch("http://localhost:3000/products" + id, values);
                }}
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
