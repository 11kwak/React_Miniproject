/* eslint-disabled */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';



function App() {

  let [글제목, 글제목변경] = useState(['Python공부', 'React공부', 'JS공부'])
  let [숫자, 숫자변경] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">

        개발 블로그
      </div>
      <div className="list">
        <h3>{글제목[0]} <span onClick={() => { 숫자변경(숫자 + 1) }}>❤</span> {숫자} </h3>
        <p>2월 16일 </p>
        <button onClick={() => { 글제목변경(['한강공원', '어린이대공원', '올림픽공원']) }}>일상 글을 불러오는 버튼</button>
        <hr />

      </div>


      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 </p>
        <hr />
      </div>

      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 18일 </p>
        <hr />
      </div>

      <Modal />

    </div>
  );
}



export default App;
