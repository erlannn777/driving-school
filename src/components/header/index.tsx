import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { fetchCourses } from "../../store/courses";
import { openSignInForm, openSignUpForm } from "../../store/ui/actions";
import Sidebar from "./Sidebar";

const Header = () => {
  const dispatch = useAppDispatch();
  const [hideLogin, setHideLogin] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) return;
    dispatch(fetchCourses() as any);
    setHideLogin(false);
  }, [dispatch, hideLogin, token]);

  const signIn = () => {
    dispatch(
      openSignInForm({
        data: null,
        open: true,
      })
    );
  };

  const signUp = () => {
    dispatch(
      openSignUpForm({
        data: null,
        open: true,
      })
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setHideLogin(true);
  };
  return (
    <header className="py-2 bg-white  text-center">
      <div className="container md:max-w-full sm:max-w-full">
        <div className="flex justify-between items-center lg:flex lg:jutify-between lg:items-center  sm:max-w-full">
          <div className="flex items-center justify-between">
            <Sidebar />
            <div className="relative w-full w-80 lg:block md:block sm:hidden md:w-64">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2 w-64 z-20 text-sm text-gray-900 bg-gray-50 rounded focus:outline-none   border border-gray-300 "
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-blue-700 rounded-r border border-blue-700 hover:bg-blue-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between ml-6">
            {!hideLogin ? (
              <div>
                <button
                  onClick={handleLogout}
                  className=" p-2.5 text-sm font-medium text-white bg-blue-700 rounded border border-blue-700 hover:bg-blue-800 sm:p-2"
                >
                  ??????????
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => signIn()}
                  className="mr-4 p-2.5 text-sm font-medium text-white bg-blue-700 rounded border border-blue-700 hover:bg-blue-800 sm:p-2"
                >
                  ??????????
                </button>
                <button
                  onClick={() => signUp()}
                  className=" p-2.5 text-sm font-medium text-white bg-blue-700 rounded border border-blue-700 hover:bg-blue-800 sm:p-2"
                >
                  ????????????????????????????????????
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="relative w-full w-80 lg:hidden md:hidden sm:block sm:mt-2">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2 w-72 z-20 text-sm text-gray-900 bg-gray-50 rounded focus:outline-none   border border-gray-300 "
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute top-0 right-3 p-2 text-sm font-medium text-white bg-blue-700 rounded-r border border-blue-700 hover:bg-blue-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
