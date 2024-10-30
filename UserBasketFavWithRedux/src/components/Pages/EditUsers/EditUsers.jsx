import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { endPoints } from "../../../services/api";
import { patchById } from "../../../services";

const EditUsers = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: "",
    username: "",
    surname: "",
    gender: "",
    admin: "",
    email: "",
    password: "",
    balance: "",
    date: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:3000/users/` + id).then((res) => {
      setValues({
        ...values,
        id: res.data.id,
        username:res.data.username,
        surname: res.data.surname,
        gender: res.data.gender,
        admin: res.data.admin,
        email: res.data.email,
        password: res.data.password,
        balance: res.data.balance,
        date: res.data.date,
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
          <form action="" method="">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Id
                  </label>
                  <input
                    value={values.id}
                    onChange={(e) => {
                      setValues({ ...values, id: e.target.value });
                    }}
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="Id"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Surname
                  </label>
                  <input
                    value={values.surname}
                    onChange={(e) => {
                      setValues({ ...values, surname: e.target.value });
                    }}
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="Surname"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Username
                  </label>
                  <input
                    value={values.username}
                    onChange={(e) => {
                      setValues({ ...values, username: e.target.value });
                    }}
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="First name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Balance
                  </label>
                  <input
                    value={values.balance}
                    onChange={(e) => {
                      setValues({ ...values, balance: e.target.value });
                    }}
                    type="number"
                    name="lName"
                    id="lName"
                    placeholder="Balance"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="guest"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email
              </label>
              <input
                type="email"
                name="guest"
                id="guest"
                placeholder="Email"
                // min={0}
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Password
                  </label>
                  <input
                    value={values.password}
                    onChange={(e) => {
                      setValues({ ...values, password: e.target.value });
                    }}
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="Password"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Gender
                  </label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        value={values.gender}
                        onChange={(e) => {
                          setValues({ ...values, gender: e.target.value });
                        }}
                        type="radio"
                        name="radio1"
                        id="radioButton1"
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor="radioButton1"
                        className="pl-3 text-base font-medium text-[#07074D]"
                      >
                        Female
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        value={values.gender}
                        onChange={(e) => {
                          setValues({ ...values, gender: e.target.value });
                        }}
                        type="radio"
                        name="radio1"
                        id="radioButton2"
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor="radioButton2"
                        className="pl-3 text-base font-medium text-[#07074D]"
                      >
                        Male
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Admin & User
                  </label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        value={values.admin}
                        onChange={(e) => {
                          setValues({ ...values, admin: e.target.value });
                        }}
                        type="radio"
                        name="radio1"
                        id="radioButton1"
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor="radioButton1"
                        className="pl-3 text-base font-medium text-[#07074D]"
                      >
                        Admin
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        value={values.admin}
                        onChange={(e) => {
                          setValues({ ...values, admin: e.target.value });
                        }}
                        type="radio"
                        name="radio1"
                        id="radioButton2"
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor="radioButton2"
                        className="pl-3 text-base font-medium text-[#07074D]"
                      >
                        User
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  patchById(endPoints.users, id, values);
                }}
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUsers;
