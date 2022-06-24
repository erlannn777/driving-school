import React, {useEffect} from 'react';
import {getAllGradesByCourse} from "../../store/courses";
import {useAppDispatch} from "../../store";
import {useGrade} from "../../store/courses/hooks";

const Grade = () => {
    const dispatch = useAppDispatch()
    const obj = new URLSearchParams(window.location.search)
    const href = obj.get("href")
    const resultsGrades = useGrade()

    useEffect(() => {
        if (!href) return
        console.log(obj.get("href"))
        dispatch(getAllGradesByCourse(href) as any)
    }, [])

    return (
        <div className='container'>
            <div className='flex items-center justify-center'>
                {
                    //@ts-ignore
                    resultsGrades.length > 0 ? (
                        <div>
                            {
                                //@ts-ignore
                                resultsGrades.map((el: { id, nameCourse, grades: [] }) => (
                                    <div key={el.id} className='w-2/3'>
                                        <table className="table-fixed" key={el.id}>
                                            <h2 className='font-bold py-2'>{el.nameCourse}</h2>
                                            {
                                                //@ts-ignore
                                                el.grades.map((el: { id, nameTheme, progress }) => (
                                                    <tbody key={el.id}>
                                                    <tr>
                                                        <td className='mb-2'>
                                                            <p>{el.nameTheme}</p>
                                                            <div className='flex items-center justify-between my-2 w-1/2'>
                                                                <h1>Progress</h1>
                                                                <h1>{el.progress}%</h1>
                                                            </div>
                                                            <div className="bg-gray-200 h-1 mb-6 w-1/2">
                                                                <div
                                                                    className="bg-green-500 h-1"
                                                                    style={{ width: `${el.progress}%` }}
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                ))
                                            }
                                        </table>
                                    </div>
                                ))}
                        </div>
                    ) : (null)
                }
            </div>
        </div>
    );
};

export default Grade;