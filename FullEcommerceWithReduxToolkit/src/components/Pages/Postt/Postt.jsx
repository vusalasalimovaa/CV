import React from "react";
import { useNavigate } from "react-router-dom";

const Postt = () => {
  let navigate = useNavigate();
  return (
    <>
      {/* component */}
      {/* This is an example component */}
      <div className="flex items-center justify-center min-h-screen shadow-md dark:bg-gray-800">
        <div className="w-full max-w-lg px-10 py-8 mx-auto">
          <div className="max-w-md mx-auto space-y-6">
            <div className="dropdown-menu">
              <div className="bg-white rounded-lg shadow-xl flex items-center px-4 py-6 cursor-pointer">
                <input
                  type="text"
                  placeholder="Post"
                  readOnly=""
                  className="pointer-events-none text-base placeholder-gray-400 outline-none w-full h-full flex-1"
                />
                <svg
                  width={20}
                  height={10}
                  viewBox="0 0 20 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1={0} y1={0} x2={10} y2={10} stroke="#9CA3AF" />
                  <line x1={20} y1={0} x2={10} y2={10} stroke="#9CA3AF" />
                </svg>
              </div>
              <div className="bg-white rounded-lg shadow-xl px-4 relative mt-8">
                <svg
                  className="absolute bottom-full right-4"
                  width={30}
                  height={20}
                  viewBox="0 0 30 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="15, 0 30, 20 0, 20" fill="#FFFFFF" />
                </svg>
                <div className="py-6 flex items-center w-full hover:bg-gray-50">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/post");
                    }}
                    className="flex-1"
                  >
                    <div className="text-gray-400 text-base">Products</div>
                  </a>
                  <div>
                    <svg
                      width={40}
                      height={20}
                      viewBox="0 0 40 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1={30} y1={2} x2={40} y2={10} stroke="#9CA3AF" />
                      <line x1={30} y1={18} x2={40} y2={10} stroke="#9CA3AF" />
                      <line x1={20} y1={10} x2={40} y2={10} stroke="#9CA3AF" />
                    </svg>
                  </div>
                </div>
                <div className="py-6 flex items-center w-full border-t border-gray-200 hover:bg-gray-50">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/postuser");
                    }}
                    className="flex-1"
                  >
                    <div className="text-gray-400 text-base">Users</div>
                  </a>
                  <div>
                    <svg
                      width={40}
                      height={20}
                      viewBox="0 0 40 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1={30} y1={2} x2={40} y2={10} stroke="#9CA3AF" />
                      <line x1={30} y1={18} x2={40} y2={10} stroke="#9CA3AF" />
                      <line x1={20} y1={10} x2={40} y2={10} stroke="#9CA3AF" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postt;
