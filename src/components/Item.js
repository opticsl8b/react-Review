import React from "react";
// 傳入 id, noteData, dateData, timeData, deleteData
const Item = ({
  id,
  noteData,
  dateData,
  timeData,
  deleteData,
  submittingStatus,
}) => {
  function deleteItem() {
    // 在新增時將useRef設成True使useEffect會被執行
    submittingStatus.current = true;
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
