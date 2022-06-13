import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppDispatch } from "../../store";
import { useSignInForm } from "../../store/ui/hooks";
import { closeSignInForm } from "../../store/ui/actions";
import api from "../../constants/api";

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const signInModal = useSignInForm();
  const [errorMessage, setErrorMessage] = useState<string>();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res: any = await api.post("/Auth/Login", {
        email: inputs.email,
        password: inputs.password,
        errors: ["no error"],
      });
      if (res.data.errors) {
        setErrorMessage(res.data.errors[0]);
      } else {
        localStorage.setItem("token", res.data.token);
        dispatch(closeSignInForm());
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Transition.Root show={signInModal.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-20 inset-0 overflow-y-auto"
        onClose={() => dispatch(closeSignInForm())}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed z-10 inset-0 bg-white bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0 transform scale-95"
            enterTo="opacity-100 transform scale-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 transform scale-100"
            leaveTo="opacity-0 transform scale-95 "
          >
            <div className="relative z-30 lg:w-1/4 dark:bg-white inline-block align-center align-middle rounded-xl bg-white border-2 border-gray  text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl">
              <div
                className="absolute h-6 w-6 top-0 right-0 fill-black m-4 hover:cursor-pointer"
                onClick={() => dispatch(closeSignInForm())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    color="black dark:white"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <section>
                <div>
                  <div className="mt-12 flex items-center justify-center p-4 text-white bg-indigo-600">
                    HYPER
                  </div>
                  <div className="container px-6 py-12 h-full">
                    <div className="flex-col items-center justify-center">
                      <h2 className="text-2xl text-gray-500">Войти</h2>
                      <p className="text-gray-400 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                    <div className="mt-4 h-full g-6 text-gray-800">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                          <label className="flex justify-start">Почта</label>
                          <input
                            type="text"
                            className="inputPlaceholder form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Почта"
                            name="email"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-6">
                          <label className="flex justify-start">Пароль</label>
                          <input
                            type="password"
                            className="inputPlaceholder form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Пароль"
                            name="password"
                            onChange={handleChange}
                          />
                        </div>
                        {errorMessage ? (
                          <div className="flex justify-between items-center mb-6">
                            <span className="text-red-600 hover:text-red-800 focus:text-red-700 active:text-red-800 duration-200 transition ease-in-out">
                              {errorMessage}
                            </span>
                          </div>
                        ) : null}

                        <div className="flex justify-between items-center mb-6">
                          <a
                            href="#!"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                          >
                            Забыл пароль?
                          </a>
                        </div>

                        <button
                          type="submit"
                          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Войти
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SignInForm;
