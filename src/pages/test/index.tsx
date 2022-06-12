import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../store";
import {fetchTest} from "../../store/courses";
import {sendTestResultSuccess} from "../../store/courses/actions";
import {useTest, useTestResult} from "../../store/courses/hooks";
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
            if (value) {
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
        }
    };

    return (
        <div className="container pt-4 sm:max-w-full">
            <div className='flex items-start justify-between bg-white p-4 rounded md:flex sm:block'>
                <div className='border p-4 bg-gray-200 m-2 md:w-60 rounded sm:w-full sm:ml-0'>
                    <h2>Вопросы: 7</h2>
                    <h2>Ответ</h2>
                    <h2>Балл: 0</h2>
                </div>
                {test.questions ? (
                    <div className='bg-blue-100 p-4 m-2 border rounded w-3/4 sm:w-full sm:ml-0'>
                        <div>
                            <div className='pb-2'>
                                <span
                                    className='font-bold text-2xl'>Question {currentQuestion + 1}/{test.questions.length}</span>
                            </div>
                            <div className="mb-2 font-bold">
                                {test.questions[currentQuestion].questionText}
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleAnswerOptionClick} className='flex flex-col'>
                                {test.questions[currentQuestion].answers.map(
                                    (answerOption: any, id: any) => (
                                        <div key={id} className='mb-2'>
                                            <label className='pr-3'>
                                                {answerOption.textAnswer}
                                            </label>
                                            <input
                                                type="checkbox"
                                                name="answer"
                                                id={answerOption.answerId}
                                            />
                                        </div>
                                    )
                                )}
                                <div className='width-28 flex items-center justify-end'>
                                    <button
                                        type="submit"
                                        className='bg-blue-700 text-white rounded hover:bg-blue-800 px-4 py-1'
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
