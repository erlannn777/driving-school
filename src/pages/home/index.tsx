import React, { useEffect } from "react";
import { useCourses } from "../../store/courses/hooks";
import { fetchCourses } from "../../store/courses";
import { useAppDispatch } from "../../store";
import { Link } from "react-router-dom";

const Home = () => {
  const courses = useCourses();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCourses() as any);
  }, [dispatch]);

  return (
    <div className="mt-18 sm:mt-8">
      <div className="container sm:max-w-full">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded sm:font-medium sm:p-2">
                Projects
              </button>
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-4 sm:p-0">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mx-2 py-2 px-4 rounded sm:font-medium sm:p-2 sm:mr-1">
                All
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mx-2 py-2 px-4 rounded sm:font-medium sm:p-2 sm:mr-1">
                Ongoing
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mx-2 py-2 px-4 rounded sm:font-medium sm:p-2 sm:mr-1">
                Finished
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 lg:grid lg:grid-cols-4 md:grid sm:grid sm:grid-cols-1">
            {courses.map((el: any) => (
              <div key={el.id}>
                <Link to={`/theme/${el.id}`}>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg mt-8">
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{el.name}</div>
                      <span className="bg-green-500 p-1 rounded text-white">
                        Finished
                      </span>
                      <p className="text-gray-700 text-base mt-8">
                        {el.description}
                      </p>
                    </div>
                    <div className="px-6 py-4">
                      <div className="flex items-center justify-start">
                        <div>
                          21 <span className="text-gray-400">Tasks</span>
                        </div>
                        <div className="ml-8">
                          741 <span className="text-gray-400">Comments</span>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 pt-4 pb-2">
                      <div className="flex items-center justify-between">
                        <span>Progress</span>
                        <span>{el.progress}%</span>
                      </div>
                      <div className=" bg-gray-200 h-1 mb-6">
                        <div
                          className="bg-green-500 h-1"
                          style={{ width: `${el.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
