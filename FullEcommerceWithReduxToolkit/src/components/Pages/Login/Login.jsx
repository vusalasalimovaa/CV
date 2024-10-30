import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getAllDatas } from "../../../services";
import { endPoints } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../../schema/loginSchema";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await getAllDatas(endPoints.users);
      const loginUser = res.find(
        (elem) =>
          elem.username === values.username && elem.password === values.password
      );
      if (loginUser) {
        console.log("Welcome");
        navigate("/");

        loginUser.isAdmin
          ? localStorage.setItem("muavin", JSON.stringify(true))
          : localStorage.setItem("muavin", false);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  JSON.parse(localStorage.getItem("muavin"))
    ? navigate("/admin")
    : navigate("/user/");

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="username">
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="password">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <Field
                    id="remember_me"
                    type="checkbox"
                    name="rememberMe"
                    className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm leading-5 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm">
                  Forgot your password?
                </a>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
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
      </div>
    </div>
  );
};

export default Login;
