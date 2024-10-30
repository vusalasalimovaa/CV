import React, { useState } from "react";
import { getAllDatas } from "../../../services";
import { endPoints } from "../../../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  return (
    <>
      {/* component */}
      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">
            Welcome.
          </h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="name">
                Username
              </label>
              <input
                value={loginData.username}
                onChange={(e) => {
                  setLoginData({ ...loginData, username: e.target.value });
                }}
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="password">
                Password
              </label>
              <input
                value={loginData.password}
                onChange={(e) => {
                  setLoginData({ ...loginData, password: e.target.value });
                }}
                id="password"
                type="text"
                name="password"
                placeholder="Password"
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>
              <a href="#" className="text-sm">
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
            <div className="mt-6">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  //   console.log(loginData);

                  getAllDatas(endPoints.users).then((res) => {
                    // console.log(res);

                    let loginUser = res.find(
                      (elem) =>
                        elem.username == loginData.username &&
                        elem.password == loginData.password
                    );
                    // console.log("LoginUser", loginUser);

                    if (loginUser) {
                      console.log("Welcome");
                      // localStorage.setItem(
                      //   "LoginUser",
                      //   JSON.stringify(loginUser)
                      // );
                      navigate("/");

                      //   setLoginData({});
                    } else {
                      console.log("Error");
                    }
                  });
                }}
                href=""
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
              >
                Sign In
              </button>
            </div>
            <div className="mt-6 text-center">
              <a
                onClick={() => {
                  navigate("/register");
                }}
                href=""
                className="underline"
              >
                Sign up for an account
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
