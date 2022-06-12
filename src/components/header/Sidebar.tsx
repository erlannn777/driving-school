import React, {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        {
            id: "2",
            url: "/dashboard",
            title: "Dashboard",
            icon: (
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
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
        {
            id: "1",
            url: "/",
            title: "Home",
            icon: (
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
            ),
        },

        {
            id: "3",
            url: "/create-sale",
            title: "Courses",
            icon: (
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
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
        },
    ];

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
                    <div className="flex items-start h-full justify-center min-h-screen text-center">
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
                            <div className="max-w-xs ml-auto fixed left-0 w-full h-full shadow-xl py-4 pb-12 flex flex-col overflow-y-auto bg-slate-700 text-black p-5">
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
                                            <li className='mb-4'>
                                                <a href="#"
                                                   className='flex items-center gap-3 text-xl text-gray-400 font-bold font-light'>
                                                    <span className="hover:underline font-bold">NAVIGATION</span>
                                                </a>
                                            </li>
                                            <li className='mb-4 flex items-center justify-between text-gray-400'>
                                                <a href="#"
                                                   className='flex items-center gap-3 text-xl  font-bold font-light'>
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
                                                    <span className="hover:underline font-bold">Dashboard</span>
                                                </a>
                                                <span className='bg-green-500 p-1 rounded text-white text-sm'>4</span>
                                            </li>
                                            <li className='mb-4 '>
                                                <a href="#" className='flex items-center gap-3 text-xl text-gray-400 font-bold font-light'>
                                                    <span className="hover:underline font-bold">APPS</span>
                                                </a>
                                            </li>
                                            {links.map((item) => {
                                                const {id, url, title, icon} = item;
                                                return (
                                                    <li key={id} className="py-1">
                                                        <a
                                                            href={url}
                                                            className="flex items-center gap-3 text-xl font-light text-gray-400"
                                                        >
                                                            <span>{icon}</span>
                                                            <span className="hover:underline font-bold">{title}</span>
                                                        </a>
                                                    </li>
                                                );
                                            })}
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
