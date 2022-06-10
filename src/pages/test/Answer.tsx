import React from "react";
import decode from "./Decode";

const Answer = (data: any) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          name={data.questionText}
          value={data.answer}
          id={data.questionId}
        />
        {decode(data.answer)}
      </label>
    </div>
  );
};

export default Answer;
