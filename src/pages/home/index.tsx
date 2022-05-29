import React from "react";

const Home = () => {
    return (
        <div className='mt-18'>
            <div className='container'>
                <div>
                    <div className='flex items-center justify-between'>
                        <div>
                            <button
                                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'>Projects
                            </button>
                        </div>
                        <div className='flex items-center justify-between bg-gray-100 p-4'>
                            <button
                                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mx-2 py-2 px-4 rounded'>All
                            </button>
                            <button
                                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mx-2 py-2 px-4 rounded'>Ongoing
                            </button>
                            <button
                                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mx-2 py-2 px-4 rounded'>Finished
                            </button>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-8">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <span className='bg-green-500 p-1 rounded text-white'>Finished</span>
                            <p className="text-gray-700 text-base mt-8">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className='px-6 py-4'>
                            <div className='flex items-center justify-start'>
                                <div>
                                    21 <span className='text-gray-400'>Tasks</span>
                                </div>
                                <div className='ml-8'>
                                    741 <span className='text-gray-400'>Comments</span>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <div className='flex items-center justify-between'>
                                <span>Progress</span>
                                <span>100%</span>
                            </div>
                            <div className='w-full h-1 bg-gray-300 my-4'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
