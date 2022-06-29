import React from "react";
import Item from "./Item";
// listData is declared from Home
const List = ({ listData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time } = item;
        // 將noteData,dateData,timeData傳入Item
        return <Item noteData={note} dateData={date} timeData={time} />;
      })}
    </div>
  );
};

export default List;
