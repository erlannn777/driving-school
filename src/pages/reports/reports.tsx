import React, { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { getAllGrades } from "../../store/courses";
import { useAllGrade } from "../../store/courses/hooks";

const Reports = () => {
// <<<<<<< HEAD
    const dispatch = useAppDispatch()
    const obj = new URLSearchParams(window.location.search)
    const href = obj.get("href")
    const allGrades = useAllGrade()

    useEffect(() => {
        if (!href) return
        console.log(obj.get("href"))
        dispatch(getAllGrades(href) as any)
    }, [])

    console.log(allGrades)
    return (
        <div className='container'>
            <div className='flex items-center justify-center'>
                {
                    //@ts-ignore
                    allGrades.length > 0 ? (
                        <div>
                            {
                                //@ts-ignore
                                allGrades.map((el: { id, nameCourse, grades: [] }) => (
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
    )
{/*=======*/}
{/*  const dispatch = useAppDispatch();*/}
{/*  const obj = new URLSearchParams(window.location.search);*/}
{/*  const href = obj.get("href");*/}
{/*  const allGrades = useAllGrade();*/}
{/*  console.log(allGrades);*/}
{/*  useEffect(() => {*/}
{/*    if (!href) return;*/}
{/*    console.log(obj.get("href"));*/}
{/*    dispatch(getAllGrades(href) as any);*/}
{/*  }, []);*/}
{/*  //   const allGrades: string = { name };*/}
{/*  return (*/}
{/*    <div className="container">*/}
{/*      <div className="flex items-center justify-center">*/}
{/*        <div className="w-2/3">*/}
{/*          /!* {allGrades.name ? (*/}
{/*            <table className="table-fixed">*/}
{/*              <h2 className="font-bold py-2">{allGrades?.name}</h2>*/}
{/*              <tbody>*/}
{/*                <tr>*/}
{/*                  <td className="mb-2">*/}
{/*                    <p>{el.nameTheme}</p>*/}
{/*                    <div className="flex items-center justify-between my-2 w-1/2">*/}
{/*                      <h1>Progress</h1>*/}
{/*                      <h1>{el.progress}%</h1>*/}
{/*                    </div>*/}
{/*                    <div className="bg-gray-200 h-1 mb-6 w-1/2">*/}
{/*                      <div*/}
{/*                        className="bg-green-500 h-1"*/}
{/*                        style={{ width: `${el.progress}%` }}*/}
{/*                      />*/}
{/*                    </div>*/}
{/*                  </td>*/}
{/*                </tr>*/}
{/*              </tbody>*/}
{/*            </table>*/}
{/*          ) : null} *!/*/}
{/*>>>>>>> 3c1eb64eea7eb0e515c0bc33291bdc5fe6fbc9b9*/}
{/*        </div>*/}
{/*      </div>*/}
{/*    </div>*/}
};

export default Reports;
