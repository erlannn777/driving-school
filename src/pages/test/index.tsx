import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { fetchTest } from "../../store/courses";
import { useTest } from "../../store/courses/hooks";
import "./styles.css";

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
];

const Test = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const test: any = useTest();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

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
    console.log(e.target.value);

    console.log(Object.fromEntries(checkedValues));

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
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
                      id={answerOption.textAnswer}
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
