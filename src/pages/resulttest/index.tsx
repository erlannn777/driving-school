import React, {useEffect, useState} from 'react';
import API from "../../constants/api";
import {useParams} from "react-router-dom";

const TestResult = () => {
    const params = useParams();
    const [result, setResult] = useState({})
    const getTestResult = async () => {
        try {
            const res = await API.get(`Test/GetTestResult?themeId=${params.id}`);
            setResult(res.data)
        } catch (e) {
            console.log(e);
        }
    };

    console.log(result)
    useEffect(() => {
        getTestResult()
    }, [])
    return (

        <div className='flex items-center justify-center my-4'>
            <div className='bg-white w-1/2 flex items-center justify-center p-4 rounded border-t-8 border-indigo-600'>
                <h1 className='font-bold text-xl'>Резултат теста!</h1>
            </div>
        </div>
    );
};

export default TestResult;