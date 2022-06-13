import React, { useEffect, useState } from "react";
import API from "../../constants/api";
import { useParams } from "react-router-dom";

const TestResult = () => {
  const params = useParams();
  const [result, setResult] = useState<any>();

  const getTestResult = async () => {
    try {
      const res = await API.get(`Test/GetTestResult?themeId=${params.id}`);
      setResult(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTestResult();
  }, []);

  return (
    <div className="flex items-center justify-center mt-56">
      <div className="bg-white w-1/3 flex items-center justify-center p-4 rounded border-t-8 border-indigo-600">
        {result ? (
          <div>
            <h1 className="font-bold text-2xl mb-2">Результат теста</h1>
            <h2 className="text-xl font-bold">{result.status}</h2>
            <h2>
              Правильный ответы:
              <span className="pl-2">{result.amountRightQuestions}</span>
            </h2>
            <h2>
              Неправильный ответы:
              <span className="pl-2">{result.amountWrongQuestions}</span>
            </h2>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TestResult;
