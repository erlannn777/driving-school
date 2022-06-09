import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { fetchLectures } from "../../store/courses";
import { useLectures } from "../../store/courses/hooks";
import { Lupa } from "./assets";

const Lectures = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const lectures: any = useLectures();
  useEffect(() => {
    if (!params.id) return;
    dispatch(fetchLectures(Number(params.id)) as any);
  }, []);
  console.log(lectures);

  return (
    <div className="container min-h-screen">
      <div className="w-full grid grid-cols-2 gap-12">
        {lectures
          ? lectures.map((lecture: any, id: number) => (
              <div key={id} className="w-96 flex justify-between m-4">
                <div className="m-2">
                  <div className="bg-blue-200 p-1 rounded-full">
                    <Lupa />
                  </div>
                </div>{" "}
                <div className="w-11/12 flex flex-col items-start">
                  <Link to={`/lecture/${lecture.id}`}>
                    <span className="font-bold text-gray-600">
                      {lecture.name}
                    </span>
                  </Link>
                  <span className="text-sm tracking-widest pt-2 text-gray-600">
                    {lecture.description}
                  </span>
                </div>
              </div>
            ))
          : "Лекции нет"}
      </div>
    </div>
  );
};

export default Lectures;
