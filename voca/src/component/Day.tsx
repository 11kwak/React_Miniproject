import React from "react";
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word, { IWord } from "./Word";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const Day = () => {
  const a = useParams<{ day: string }>();
  const day = a.day;

  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //     fetch(`http://localhost:3001/words?day=${day}`)
  //         .then(res => {
  //             return res.json()
  //         })
  //         .then(data => {
  //             setWords(data)
  //         })
  // }, [day])  -> 이걸 커스텀 훅을 사용해서

  const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day : {day}</h2>
      {words.length === 0 && <span>Loading....</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};
