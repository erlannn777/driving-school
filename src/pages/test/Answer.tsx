import { decode } from "punycode";
import React from "react";

const Answer = (data: any) => {
  return (
    <div>
      <label>
        <input type="radio" name={data.name} value={data.correct} />
        {decode(data.answer)}
      </label>
    </div>
  );
};

export default Answer;
