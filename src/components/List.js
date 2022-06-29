import React from "react";
import Item from "./Item";
// listData is declared from Home
const List = ({ listData }) => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Item key={item} />
      ))}
    </div>
  );
};

export default List;
