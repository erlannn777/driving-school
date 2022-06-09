import { decode } from "punycode";
import React from "react";
import Answer from "./Answer";

const Question = (data: any) => {
  const fieldset = data.visible ? "fieldset" : "fieldset u-hidden";
  const questionNo = data.name;
  return (
    <div className={fieldset}>
      <h1>{decode(data.category)}</h1>
      <h3>{decode(data.question)}</h3>
      {data.answers &&
        data.answers.map((data: any, i: any) => {
          return (
            <Answer
              key={i}
              name={questionNo}
              answer={data.answer}
              correct={data.correct}
            />
          );
        })}
    </div>
  );
};

export default Question;
