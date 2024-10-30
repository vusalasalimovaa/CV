import React, { useState } from "react";
import axios from "axios";

const PostUser = () => {
  const [inputValue, setInputValue] = useState(
    {
      id: "",
      username: "",
      surname: "",
      gender: "",
      admin: "",
      email: "",
      password: "",
      balance: "",
      date: "",
    },
  );
  return (
    <>
      {/* component */}
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Users
        </h1>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="username"
              >
                Id
              </label>
              <input
                value={inputValue.id}
                onChange={(e) => {
                  setInputValue({ ...inputValue, id: e.target.value });
                }}
                id="id"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Username</label>
              <input
                value={inputValue.username}
                onChange={(e) => {
                  setInputValue({ ...inputValue, username: e.target.value });
                }}
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200">Email</label>
              <input
                value={inputValue.email}
                onChange={(e) => {
                  setInputValue({ ...inputValue, email: e.target.value });
                }}
                id="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Password</label>
              <input
                value={inputValue.password}
                onChange={(e) => {
                  setInputValue({
                    ...inputValue,
                    password: e.target.value,
                  });
                }}
                id="password"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Balance</label>
              <input
                value={inputValue.balance}
                onChange={(e) => {
                  setInputValue({
                    ...inputValue,
                    balance: e.target.value,
                  });
                }}
                id="balance"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200">Date</label>
              <input
                value={inputValue.date}
                onChange={(e) => {
                  setInputValue({
                    ...inputValue,
                    date: e.target.value,
                  });
                }}
                id="date"
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* <div className="-mx-3 flex flex-wrap"> */}
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Gender
                </label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <input
                      value={inputValue.gender}
                      onChange={(e) => {
                        setValues({ ...inputValue, gender: e.target.value });
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
                      value={inputValue.gender}
                      onChange={(e) => {
                        setValues({ ...inputValue, gender: e.target.value });
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
                      value={inputValue.admin}
                      onChange={(e) => {
                        setValues({ ...inputValue, admin: e.target.value });
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
                      value={inputValue.admin}
                      onChange={(e) => {
                        setValues({ ...inputValue, admin: e.target.value });
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
          <div className="flex justify-end mt-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                axios.post("http://localhost:3000/users", inputValue);
              }}
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default PostUser;
