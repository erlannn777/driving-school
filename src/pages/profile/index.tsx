import React from 'react';
// @ts-ignore
import {PersonIcon, BigPersonIcon, Facebook, Twitter, Instagram, Linkedin} from "./assets.tsx";

const Profile = () => {
    return (
        <div>
            <div className='container'>
                <div className='flex items-start justify-between py-4'>
                    <div className='bg-white w-2/4 mx-4 p-4 rounded'>
                        <div className='flex items-center justify-center'>
                            <div className='flex-col items-center justify-center'>
                                <span className='flex justify-center'>
                                    <BigPersonIcon/>
                                </span>
                                <h2 className='text-gray-400'>12345@gmail.com</h2>
                            </div>
                        </div>
                        <div className='mt-12'>
                            <h2 className='text-gray-400 text-sm font-bold mb-3'>
                                Full Name:
                                <span className='text-gray-400 text-xs pl-3'>Erlan</span>
                            </h2>
                            <h2 className='text-gray-400 text-xl text-sm font-bold mb-3'>
                                Email:
                                <span className='text-gray-400 text-xs pl-3'>12345@gmail.com</span>
                            </h2>
                            <h2 className='text-gray-400 text-xl text-sm font-bold'>
                                Location:
                                <span className='text-gray-400 text-xs pl-3'>Erlan</span>
                            </h2>
                        </div>
                    </div>
                    <div className='bg-white w-full p-4 rounded'>
                        <div className='flex items-center mb-4'>
                            <PersonIcon/>
                            <h2>PERSONAL INFO</h2>
                        </div>
                        <div>
                            <form>
                                <div className="mb-6">
                                    <label className='flex justify-start text-gray-500'>Username</label>
                                    <input
                                        type="text"
                                        className="inputPlaceholder form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Почта"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className='flex justify-start text-gray-500'>FullName</label>
                                    <input
                                        type="text"
                                        className="inputPlaceholder form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Почта"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1"
                                           className="form-label inline-block mb-2 text-gray-500"
                                    >Bio</label
                                    >
                                    <textarea
                                        className="
                                            form-control
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                          "
                                        id="exampleFormControlTextarea1"
                                        placeholder="Your message"
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <div className="mb-6">
                                            <label className='flex justify-start text-gray-500'>Facebook</label>
                                            <div className='flex item-center'>
                                                <span className='bg-gray-300 rounded-l flex items-center justify-center px-2'>
                                                    <Facebook/>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="inputPlaceholder form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-r transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    placeholder="Почта"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className='flex justify-start text-gray-500'>Twitter</label>
                                        <div className='flex item-center'>
                                                <span className='bg-gray-300 rounded-l flex items-center justify-center px-2'>
                                                    <Twitter/>
                                                </span>
                                            <input
                                                type="text"
                                                className="inputPlaceholder form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-r transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Почта"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className='flex justify-start text-gray-500'>Instagram</label>
                                        <div className='flex item-center'>
                                                <span className='bg-gray-300 rounded-l flex items-center justify-center px-2'>
                                                    <Instagram/>
                                                </span>
                                            <input
                                                type="text"
                                                className="inputPlaceholder form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-r transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Почта"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className='flex justify-start text-gray-500'>Linkedin</label>
                                        <div className='flex item-center'>
                                                <span className='bg-gray-300 rounded-l flex items-center justify-center px-2'>
                                                    <Linkedin/>
                                                </span>
                                            <input
                                                type="text"
                                                className="inputPlaceholder form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-r transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Почта"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;