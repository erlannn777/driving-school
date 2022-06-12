import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const testResult = useTestResult();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testEnded, setTestEnded] = useState(false);
  useEffect(() => {
    if (!params.id) return;
    dispatch(fetchTest(Number(params.id)) as any);
  }, [dispatch, params.id]);

  const handleAnswerOptionClick = (e: any) => {
    e.preventDefault();
    const answers: any[] = [];
    Array.from(e.target.answer).forEach((el: any) => {
      if (!el.checked) return;
      answers.push({
        answerId: el.id,
      });
    });

    dispatch(
      sendTestResultSuccess({
        questionId: test.questions[currentQuestion].id,
        answers,
      })
    );

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < test.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setTestEnded(true);
    }
  };

  const sendTestResult = async () => {
    try {
      await API.post(`/Test/SendResult?themeId=${params.id}`, testResult);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container pt-4 sm:max-w-full">
      <div className="flex items-start justify-between bg-white p-4 rounded md:flex sm:block">
        <div className="border p-4 bg-gray-200 m-2 md:w-60 rounded sm:w-full sm:ml-0">
          <h2>Вопросы: 3</h2>
          {/* <h2>Ответ</h2>
          <h2>Балл: 0</h2> */}
        </div>
        {testEnded ? (
          <div className="w-full flex flex-col items-center">
            <h2>Тест завершен</h2>
            <button
              className="bg-blue-700 text-white rounded hover:bg-blue-800 px-4 py-1 mt-5"
              onClick={() => sendTestResult()}
            >
              Отправить
            </button>
          </div>
        ) : test.questions ? (
          <div className="bg-blue-100 p-4 m-2 border rounded w-3/4 sm:w-full sm:ml-0">
            <div>
              <div className="pb-2">
                <span className="font-bold text-2xl">
                  Вопрос {currentQuestion + 1}/{test.questions.length}
                </span>
              </div>
              <div className="mb-2 font-bold">
                {test.questions[currentQuestion].questionText}
              </div>
            </div>
            <div>
              <form
                onSubmit={handleAnswerOptionClick}
                className="flex flex-col"
              >
                {test.questions[currentQuestion].answers.map(
                  (answerOption: any, id: any) => (
                    <div key={id} className="mb-2">
                      <label className="pr-3">{answerOption.textAnswer}</label>
                      <input
                        type="checkbox"
                        name="answer"
                        id={answerOption.answerId}
                      />
                    </div>
                  )
                )}
                <div className="width-28 flex items-center justify-end">
                  <button
                    type="submit"
                    className="bg-blue-700 text-white rounded hover:bg-blue-800 px-4 py-1"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <span>Теста нет</span>
        )}
      </div>
    </div>
  );
};

export default Test;
