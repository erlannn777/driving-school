import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../constants/api";
import { useAppDispatch } from "../../store";
import { fetchTest } from "../../store/courses";
import { sendTestResultSuccess } from "../../store/courses/actions";
import { useTest, useTestResult } from "../../store/courses/hooks";
import "./styles.css";

const Test = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const test: any = useTest();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const testResult = useTestResult();

  useEffect(() => {
    if (!params.id) return;
    dispatch(fetchTest(Number(params.id)) as any);
  }, [dispatch, params.id]);

  const handleAnswerOptionClick = (e: any) => {
    e.preventDefault();
    const checkedValues = Array.from(e.target.answer).map((el: any) => [
      el.id,
      el.checked,
    ]);
    checkedValues.forEach(([key, value]) => {
      // const answers: any[] = [];
      if (value) {
        // answers.push({
        //   questionId: test.questions[currentQuestion].id,
        //   answers: [
        //     {
        //       answerId: key,
        //     },
        //   ],
        // });
        dispatch(
          sendTestResultSuccess({
            questionId: test.questions[currentQuestion].id,
            answers: [
              {
                answerId: key,
              },
            ],
          })
        );
      }
    });

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < test.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      console.log("ddd");

      // API.post(`/Test/SendResult?themeId=${params.id}`, testResult);
    }
  };
  console.log(testResult);
  console.log(test);

  return (
    <div className="appp">
      {test.questions ? (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/
              {test.questions.length}
            </div>
            <div className="question-text">
              {test.questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            <form onSubmit={handleAnswerOptionClick}>
              {test.questions[currentQuestion].answers.map(
                (answerOption: any, id: any) => (
                  <label key={id}>
                    {answerOption.textAnswer}
                    <input
                      type="checkbox"
                      name="answer"
                      id={answerOption.answerId}
                    />
                  </label>
                )
              )}
              <button type="submit">Next</button>
            </form>
          </div>
        </>
      ) : (
        <span>Теста нет</span>
      )}
    </div>
  );
};

export default Test;
