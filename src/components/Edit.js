import React from "react";
// add is declared from Home
const Edit = ({ add }) => {
  function addItem() {
    add([99999, 2]);
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事:</p>
      <input type="text" />
      <p>日期:</p>
      <input type="date" />
      <p>時間:</p>
      <input type="time" />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
