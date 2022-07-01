import React from "react";
// 取得input value較好的方式-每個input設一個useState
import { useState } from "react";
// 幫key產生一個unique id
import { v4 } from "uuid";

// add is declared from Home
const Edit = ({ add }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    // 在輸入input後將Value提取出來
    // "...prevData"為原本的空陣列
    add(function (prevData) {
      return [...prevData, { id: v4(), note, date, time }];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事:</p>
      {/* 用noteChange去更新初始State，note即為最後state */}
      <input type="text" value={note} onChange={noteChange} />
      <p>日期:</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間:</p>
      <input type="time" value={time} onChange={timeChange} />
      {/* when button is pressed , will execute addItem function and data will be display(new State) @List component */}
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
