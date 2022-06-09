import React, { useState, useEffect } from "react";
import "./styles.css";
import Question from "./Question";
import { useTest } from "../../store/courses/hooks";
import { useAppDispatch } from "../../store";
import { fetchTest } from "../../store/courses";
import { useParams } from "react-router-dom";

const Test = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const test: any = useTest();
  const [questions, setQuestions] = useState<[]>();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    if (!params.id) return;
    dispatch(fetchTest(Number(params.id)) as any);
  }, [dispatch, params.id]);

  useEffect(() => {
    if (!test || !test.questions) return;
    setTotalQuestions(test.questions?.length);
    setQuestions(test.questions);
  }, [test]);

  const proceed = (e: any) => {
    e.preventDefault();
    setActiveQuestion(activeQuestion + 1);
  };
  const back = (e: any) => {
    e.preventDefault();
    setActiveQuestion(activeQuestion - 1);
  };

  const addAnswers = (formData: any) => {
    const values: any = {};
    for (var pair of formData.entries()) {
      var key = pair[0];
      var value = pair[1];

      if (values[key]) {
        if (!(values[key] instanceof Array)) {
          values[key] = new Array(values[key]);
        }
        values[key].push(value);
      } else {
        values[key] = value;
      }
    }
    console.log(values);
  };

  const submit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addAnswers(formData);
  };

  return (
    <div className="App">
      {questions ? (
        <form onSubmit={submit}>
          {questions.map((data: any, i: any) => {
            const allAnswers: any = [];
            data.answers.forEach((answer: any, i: any) => {
              allAnswers.push({
                id: answer.answerId,
                answer: answer.textAnswer,
              });
            });
            return (
              <Question
                key={i}
                name={`q-${i}`}
                question={data.questionText}
                visible={i === activeQuestion}
                answers={allAnswers}
              />
            );
          })}
          {activeQuestion > 0 && activeQuestion + 1 !== totalQuestions && (
            <button onClick={back}>Previous</button>
          )}
          {activeQuestion + 1 < totalQuestions &&
            activeQuestion + 1 !== totalQuestions && (
              <button onClick={proceed}>Next</button>
            )}

          {activeQuestion + 1 === totalQuestions && (
            <button type="submit">Submit</button>
          )}
        </form>
      ) : (
        <span>Теста нет</span>
      )}
    </div>
  );
};

export default Test;
