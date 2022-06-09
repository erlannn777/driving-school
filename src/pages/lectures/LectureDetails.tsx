import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { fetchOneLecture } from "../../store/courses";
import { useOneLecture } from "../../store/courses/hooks";

const LectureDetails = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const lecture: any = useOneLecture();

  useEffect(() => {
    if (!params.id) return;
    dispatch(fetchOneLecture(Number(params.id)) as any);
  }, [dispatch, params.id]);

  return (
    <div className="w-full flex justify-center">
      {lecture ? (
        <div
          className="w-11/12 flex items-center justify-center"
          key={lecture.id}
        >
          <div className="flex flex-col justify-center items-center">
            <span className="text-3xl text-gray-600 font-bold mt-12">
              {lecture.name}
            </span>
            <span className="text-xl text-gray-600 py-4 tracking-widest">
              {lecture.description}
            </span>
          </div>
        </div>
      ) : (
        "Лекции нет"
      )}
    </div>
  );
};

export default LectureDetails;
