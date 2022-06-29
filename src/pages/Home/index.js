import React from "react";
import { useState } from "react";
import Edit from "../../components/Edit";
import List from "../../components/List";
import "./index.css";

const Home = () => {
  // second input is a function
  const [Data, setData] = useState([]);
  return (
    <div className="app">
      {/* have Edit with a add function */}
      <Edit add={setData} />
      {/* pass Data to List component as listData */}
      <List listData={Data} />
    </div>
  );
};

export default Home;
