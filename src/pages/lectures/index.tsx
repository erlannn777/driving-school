import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { fetchLectures } from "../../store/courses";
import { useLectures } from "../../store/courses/hooks";

const Lectures = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const lectures = useLectures();
  useEffect(() => {
    if (!params.id) return;
    dispatch(fetchLectures(Number(params.id)) as any);
  }, []);
  console.log(lectures);

  return (
    <div className="w-full flex justify-center flex-wrap">
      {lectures
        ? lectures.map((lecture: any, id) => (
            <div key={id} className="w-96 flex justify-between m-4">
              <div>ss</div>{" "}
              <div className="w-11/12 flex flex-col items-start">
                <Link to={`/lecture/${lecture.id}`}>
                  <span>{lecture.name}</span>
                </Link>
                <span>{lecture.description}</span>
              </div>
            </div>
          ))
        : "Лекции нет"}
    </div>
  );
};

export default Lectures;
