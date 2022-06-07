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
  }, []);
  console.log(lecture);
  return (
    <div className="w-full flex justify-center">
      {lecture ? (
        <div className="w-11/12 flex flex-col justify-center" key={lecture.id}>
          <span>{lecture.name}</span>
          <span>{lecture.description}</span>
        </div>
      ) : (
        "Лекции нет"
      )}
    </div>
  );
};

export default LectureDetails;
