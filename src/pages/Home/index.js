import React from "react";
import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";

import Edit from "../../components/Edit";
import List from "../../components/List";
import "./index.css";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  // second input is a function
  const [data, setData] = useState([]);
  //
  const submittingStatus = useRef(false);

  useEffect(() => {
    // 預防useEffect 將空的Data寫入DB
    if (!submittingStatus.current) {
      return;
    }
    //
    fetchSetData(data).then((data) => (submittingStatus.current = false));
  }, [data]);

  useEffect(() => {
    fetchData(setData);
    //   舊Promise寫法會需要較多callback
    // fetch(API_GET_DATA)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }, []);

  return (
    <div className="app">
      {/* have Edit with a add function which change the state of Data*/}
      <Edit add={setData} submittingStatus={submittingStatus} />
      {/* Once data state has been change  */}
      {/* pass Data to List component as listData */}
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      />
    </div>
  );
};

export default Home;
