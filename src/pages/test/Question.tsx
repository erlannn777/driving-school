import React from "react";
import Answer from "./Answer";
import decode from "./Decode";

const Question = (data: any) => {
  const fieldset = data.visible ? "fieldset" : "fieldset u-hidden";
  const questionNo = data.name;

  return (
    <div className={fieldset}>
      <h3>{decode(data.question)}</h3>
      {data.answers &&
        data.answers.map((data: any, i: any) => {
          return <Answer key={i} name={questionNo} answer={data.answer} />;
        })}
    </div>
  );
};

export default Question;
