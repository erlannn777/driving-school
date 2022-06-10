import React from "react";
import Answer from "./Answer";
import decode from "./Decode";

const Question = (data: any) => {
  const fieldset = data.visible ? "fieldset" : "fieldset u-hidden";

  return (
    <div className={fieldset}>
      <h3>{decode(data.questionText)}</h3>
      {data.answers &&
        data.answers.map((item: any, i: any) => {
          return (
            <Answer
              key={i}
              questionId={data.questionId}
              questionText={data.questionText}
              answer={item.answer}
            />
          );
        })}
    </div>
  );
};

export default Question;
