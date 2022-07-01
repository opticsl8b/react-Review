import React from "react";
import Item from "./Item";
// listData is declared from Home
const List = ({ listData, deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        // 將noteData,dateData,timeData,id傳入Item
        return (
          <Item
            key={id}
            id={id}
            noteData={note}
            dateData={date}
            timeData={time}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List;
