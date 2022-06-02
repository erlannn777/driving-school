import React from 'react';

const Courses = () => {
    return (
        <div>
            <div className="container flex flex-col">
                <div className="overflow-x-auto">
                    <div className='flex items-center justify-between'>
                        <div>
                            <button type="button"
                                    className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                                Заказы
                            </button>
                        </div>
                        <div className='flex items-center justify-start my-4'>
                            <div className=" xl:w-96">
                                <input
                                    type="text"
                                    className="form-control block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Search . . ."
                                />
                            </div>
                            <div>
                                <span>Статус</span>
                                <div className="dropdown inline-block relative ml-2">
                                    <button
                                        className="bg-white border text-gray-700 font-semi-bold py-2 px-4 rounded inline-flex items-center">
                                        <span className="mr-1">Bыбирать...</span>
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                    </button>
                                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                                        <li className=""><a
                                            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                            href="#">One</a></li>
                                        <li className=""><a
                                            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                            href="#">Two</a></li>
                                        <li className=""><a
                                            className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                            href="#">Three is the magic number</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 inline-block min-w-full g:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b border-b bg-blue-100 border-blue-200">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Имя
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Статус
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Пройти тест
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Mark
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Otto
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button type="button"
                                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                            Пройти тест
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;