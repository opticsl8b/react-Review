import React from "react";
// 傳入note,date,
const Item = ({ noteData, dateData, timeData }) => {
  return (
    <div className="item">
      <div>
        <p>{noteData}</p>
        <p>{`${dateData} ${timeData}`}</p>
      </div>
      <button className="remove">刪除</button>
    </div>
  );
};

export default Item;
