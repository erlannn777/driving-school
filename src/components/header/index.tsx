import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { openSignInForm, openSignUpForm } from "../../store/ui/actions";
import Sidebar from "./Sidebar";

const Header = () => {
  const dispatch = useAppDispatch();
  const [hideLogin, setHideLogin] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setHideLogin(false);
    }
  }, []);
  return (
    <header className="py-2 bg-white  text-center">
      <div className="container ">
        <div className="flex justify-between items-center lg:flex lg:jutify-between lg:items-center  sm:max-w-full">
          <div className="flex items-center justify-between">
            <Sidebar />
            <div className="relative w-full w-80 lg:block md:block sm:hidden md:w-64">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded focus:outline-none border border-gray-300 md:p-2"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r border border-blue-700 hover:bg-blue-800 md:p-2"
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
          <div
            className={`flex items-center justify-between ml-6 ${
              hideLogin ? "block" : "hidden"
            }`}
          >
            <button
              onClick={() =>
                dispatch(
                  openSignInForm({
                    data: null,
                    open: true,
                  })
                )
              }
              className="mr-4 p-2.5 text-sm font-medium text-white bg-blue-700 rounded border border-blue-700 hover:bg-blue-800 sm:p-2"
            >
              Войти
            </button>
            <button
              onClick={() =>
                dispatch(
                  openSignUpForm({
                    data: null,
                    open: true,
                  })
                )
              }
              className=" p-2.5 text-sm font-medium text-white bg-blue-700 rounded border border-blue-700 hover:bg-blue-800 sm:p-2"
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
        <div className="relative w-full w-80 lg:hidden md:hidden sm:block">
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
