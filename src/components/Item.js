import React from "react";
// 傳入 id, noteData, dateData, timeData, deleteData
const Item = ({ id, noteData, dateData, timeData, deleteData }) => {
  function deleteItem() {
    deleteData(function (prev) {
      // 傳回所有不屬於當前ID的Item
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <div className="item">
      <div>
        <p>{noteData}</p>
        <p>{`${dateData} ${timeData}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">
        刪除
      </button>
    </div>
  );
};

export default Item;
