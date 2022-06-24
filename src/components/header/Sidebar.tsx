import React, {Fragment, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {Link} from "react-router-dom";
import {getItemExample} from "../../store/courses";
import {useButtonMenu, useButtonMenuLaval} from "../../store/courses/hooks";
import {useAppDispatch} from "../../store";
import API from "../../constants/api";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch()
    const menuCourses = useButtonMenu()
    const menuButtonsLaval = useButtonMenuLaval()
    useEffect(() => {
        dispatch(getItemExample() as any)

    }, [])

    return (
        <div className="">
            <div className="pr-2" onClick={() => setOpen(true)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-black"
                    fill="black"
                    viewBox="0 0 24 24"
                    stroke="black"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className=" absolute z-30 inset-0 overflow-y-auto"
                    onClose={() => setOpen(false)}
                >
                    <div className="flex items-start h-full justify-center min-h-screen ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-white bg-opacity-75 transition-opacity "/>
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-500"
                            enterFrom="opacity-0 translate-x-0"
                            enterTo="opacity-100 translate-x-1"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-x-40"
                            leaveTo="opacity-0 translate-x-0"
                        >
                            <div
                                className="max-w-xs ml-auto fixed left-0 w-full h-full shadow-xl py-4 pb-12 flex flex-col overflow-y-auto bg-slate-700 text-black p-5">
                                <div
                                    className="absolute top-0 right-0 p-2"
                                    onClick={() => setOpen(false)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 fill-black text-white z-40 "
                                        fill="#000"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                            fill="#000"
                                        />
                                    </svg>
                                </div>
                                <div className="w-full flex flex-col mt-6">
                                    <div className=" flex items-center justify-center">
                                        <div className="h-12 w-12">
                                            <img
                                                src="https://avatars.githubusercontent.com/u/90403657?s=200&v=4"
                                                alt="logo"
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-base font-bold text-gray-200 ml-2 ">
                                          DRIVING SCHOOL
                                        </span>
                                    </div>
                                    <div>
                                        <ul className=" flex-grow mt-5">
                                            <li className="mb-4">
                                                <a
                                                    href="/"
                                                    className="flex items-center gap-3 text-xl text-gray-400 font-bold font-light"
                                                >
                                                    <span className="hover:underline font-bold">
                                                      NAVIGATION
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="mb-4 flex items-center justify-between text-gray-400">
                                                <div className="flex items-center gap-3 text-xl  font-bold font-light">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                        />
                                                    </svg>
                                                    <Link to="/">
                                                       <span className="hover:underline font-bold">
                                                         Главная
                                                       </span>
                                                    </Link>
                                                </div>
                                            </li>
                                            <div className="mb-2">
                                                {
                                                    // @ts-ignore
                                                    menuCourses.name ? (
                                                        <details className="flex items-start justify-start">
                                                            <summary className="mr-44 text-gray-400 font-bold">
                                                                {
                                                                    // @ts-ignore
                                                                    menuCourses.name
                                                                }
                                                            </summary>
                                                            <Link to='/'>
                                                                <p className='text-gray-400'>
                                                                    {
                                                                        // @ts-ignore
                                                                        menuCourses.buttons?.map((item: any, index) => (
                                                                            <Link to={`/reports/${index}?href=${item.href}`}>
                                                                                <li key={index} className="text-start mb-4">
                                                                                    {item.title}
                                                                                </li>
                                                                            </Link>
                                                                        ))}
                                                                </p>
                                                            </Link>
                                                        </details>

                                                    ) : (null)
                                                }
                                            </div>
                                            <div className="mb-2">
                                                {
                                                    // @ts-ignore
                                                    menuButtonsLaval.name ? (
                                                        <details className="flex items-start justify-start">
                                                            <summary className="mr-52 text-gray-400 font-bold">
                                                                {
                                                                    // @ts-ignore
                                                                    menuButtonsLaval.name
                                                                }
                                                            </summary>
                                                                <div className='text-gray-400 text-start'>
                                                                    {
                                                                        // @ts-ignore
                                                                        menuButtonsLaval.buttons?.map((item: any, index) => (
                                                                            <div className="w-full text-start flex justify-start mb-4">
                                                                                <Link to={`/resultsgrade/${index}?href=${item.href}`}>
                                                                                <span key={index} className="w-full">
                                                                                    {item.title}
                                                                                </span>
                                                                                </Link>
                                                                            </div>
                                                                        ))}
                                                                </div>
                                                        </details>
                                                    ) : (null)
                                                }
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
};

export default Sidebar;
