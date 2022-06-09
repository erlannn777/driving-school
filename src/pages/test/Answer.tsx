import React from "react";
import decode from "./Decode";

const Answer = (data: any) => {
  return (
    <div>
      <label>
        <input type="radio" name={data.name} value={data.answer} />
        {decode(data.answer)}
      </label>
    </div>
  );
};

export default Answer;
