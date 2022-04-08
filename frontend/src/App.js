import React, { useState, useEffect } from "react";
import Sidebar from "./component/Sidebar/Sidebar";
import TopBar from "./component/Topbar/TopBar";
import "./App.css";
import axios from "axios";
import Widget from "./component/Widgetinfo/Widgetinfo";
import TableData from "./component/TableData/TableData";

function App() {
  const [jiraData, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const getDataFromJiraAPI = async () => {
    setLoading(true);
    const response = await axios.get("http://localhost:4001/getData");
    setData(response.data);
    setLoading(false);
  };
  useEffect(() => {
    getDataFromJiraAPI();
  }, []);
  return (
    <>
      <TopBar />
      <div className="container">
        <Sidebar />
        <div>
          <Widget data={jiraData} load={loading} />
          <TableData />
        </div>
      </div>
    </>
  );
}

export default App;
