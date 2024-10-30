import React, { useEffect, useState } from "react";
import { getAllDatas } from "../../../services";
import { endPoints } from "../../../services/api";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Users = ({ state, dispatch }) => {
  let navigate = useNavigate();
  useEffect(() => {
    getAllDatas(endPoints.users).then((data) => {
      console.log(data);
      dispatch({
        type: "SET_USERS",
        userDatas: data,
      });
    });
  }, []);

  return (
    <>
      {/* component */}
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4">
          <div className="mb-3">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h1 style={{ fontSize: "24px", fontWeight: "600" }}>Users</h1>
              <div>
                <div>
                  <div className="mx-auto max-w-md">
                    <form action="" className="relative mx-auto w-max">
                      <input
                        onChange={(e) => {
                          console.log(e.target.value);

                          dispatch({
                            type: "SEARCH_USERS",
                            searchValue: e.target.value,
                          });
                        }}
                        type="search"
                        className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* component */}
          <button
            onClick={() => {
              dispatch({ type: "AtoZusers" });
            }}
            className="mr-5 group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
          >
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full" />
            <span className="relative text-black group-hover:text-white">
              A-Z
            </span>
          </button>

          <button
            onClick={() => {
              dispatch({ type: "ZtoAusers" });
            }}
            className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
          >
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full" />
            <span className="relative text-black group-hover:text-white">
              Z-A
            </span>
          </button>

          <>
            {/* component */}
            {/* This is an example component */}
            <div className="relative inline-flex ml-5">
              <svg
                className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fillRule="nonzero"
                />
              </svg>
              <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option>Admin & User</option>
                <option>Admin</option>
                <option>User</option>
              </select>
            </div>
          </>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Id</th>
                <th className="text-left p-3 px-5">Username</th>
                <th className="text-left p-3 px-5">Surname</th>
                <th className="text-left p-3 px-5">Gender</th>
                <th className="text-left p-3 px-5">Admin & User</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Password</th>
                <th className="text-left p-3 px-5">Balance</th>
                <th className="text-left p-3 px-5">Date</th>
                <th className="text-left p-3 px-5">Edit</th>
                <th className="text-left p-3 px-5">Delete</th>
                <th />
              </tr>
              {/* <tr className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5">
                  <input
                    type="text"
                    defaultValue="user.name"
                    className="bg-transparent"
                  />
                </td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    defaultValue="user.email"
                    className="bg-transparent"
                  />
                </td>
                <td className="p-3 px-5">
                  <select value="user.role" className="bg-transparent">
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr> */}

              {state.filteredUsers.map((elem) => {
                return (
                  <tr
                    key={elem.id}
                    className="border-b hover:bg-orange-100 bg-gray-100"
                  >
                    <td className="p-3 px-5">{elem.id}</td>
                    <td className="p-3 px-5">{elem.username}</td>
                    <td className="p-3 px-5">{elem.surname}</td>
                    <td className="p-3 px-5">{elem.gender}</td>
                    <td className="p-3 px-5">{elem.admin}</td>
                    <td className="p-3 px-5">{elem.email}</td>
                    <td className="p-3 px-5">{elem.password}</td>
                    <td className="p-3 px-5">{elem.balance}</td>
                    <td className="p-3 px-5">{elem.date}</td>
                    <td className="p-3 px-5">
                      {/* <Link to={`/editusers/${elem.id}`}> */}
                      <button
                        onClick={() => {
                          navigate("/editusers");
                        }}
                        type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      {/* </Link> */}
                    </td>
                    <td className="p-3 px-5">
                      <button
                        onClick={() => {
                          let arr = state.users.filter(
                            (el) => el.id !== elem.id
                          );
                          dispatch({ type: "SET_USERS", userDatas: arr });

                          axios.delete(
                            `http://localhost:3000/users/${elem.id}`
                          );
                        }}
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
