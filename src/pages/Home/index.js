import React from "react";
import { useState, useEffect } from "react";
import { API_GET_DATA } from "../../global/constants";

import Edit from "../../components/Edit";
import List from "../../components/List";
import "./index.css";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const data = await res.json();
  setData(data);
  //   console.log(data);
}

const Home = () => {
  // second input is a function
  const [data, setData] = useState([]);

  useEffect(() => {
    //   舊Promise寫法會需要較多callback
    // fetch(API_GET_DATA)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    fetchData(setData);
  }, []);

  return (
    <div className="app">
      {/* have Edit with a add function which change the state of Data*/}
      <Edit add={setData} />
      {/* Once data state has been change  */}
      {/* pass Data to List component as listData */}
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
