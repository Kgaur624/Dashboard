import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TableData.css";
const TableData = () => {
  const [jiraData, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const getDataFromJiraAPI = async () => {
    setLoading(true);
    const response = await axios.get("http://localhost:4001/getData");

    setData(response.data);
    setLoading(false);

    console.log("res", response.data);
  };
  useEffect(() => {
    getDataFromJiraAPI();
  }, []);

  return (
    <div className="table">
      {loading ? (
        <div>...Data Loading.....</div>
      ) : (
        <div>
          <table>
            <tbody>
              <tr>
                <th>Key</th>
                <th>Summary</th>
                <th>Type</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Severity</th>
                <th>Assignee</th>
                <th>Reporter</th>
                <th>Dev Team</th>
                <th>Fix Versions</th>
                <th>Development</th>
                <th>Found In Version</th>
                <th>Created</th>
              </tr>
              {jiraData &&
                jiraData.issues.map((item, index) => {
                  let jiraDevStatus = item.fields.customfield_17660.substring(
                    item.fields.customfield_17660.indexOf("state=")
                  );
                  jiraDevStatus = jiraDevStatus.substring(
                    7,
                    jiraDevStatus.indexOf("',")
                  );

                  const d = new Date(item.fields.created);
                  const options = {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  };
                  options.timeZone = "PST";
                  options.timeZoneName = "short";
                  const PDT_Date = d.toLocaleDateString("en-US", options);
                  return (
                    <tr>
                      <td className="fields">
                        <a
                          href={`https://jira.dev.lithium.com/browse/${item.key}`}
                          target="_blank"
                        >
                          {item.key}
                        </a>
                      </td>

                      <td className="fields">{item.fields.summary}</td>
                      <td className="fields">{item.fields.issuetype.name}</td>
                      <td className="fields">{item.fields.status.name}</td>
                      <td className="fields">{item.fields.priority.name}</td>
                      <td className="fields">
                        {item.fields.customfield_10264 == null
                          ? " "
                          : item.fields.customfield_10264.value}
                      </td>
                      <td className="fields">
                        {item.fields.assignee == null
                          ? "Unassigned"
                          : item.fields.assignee.displayName}
                      </td>
                      <td className="fields">
                        {item.fields.reporter.displayName}
                      </td>
                      <td className="fields">
                        {item.fields.customfield_12561.value}
                      </td>
                      <td className="fields">
                        {item.fields.fixVersions[0].name}
                      </td>
                      <td className="fields">{jiraDevStatus}</td>
                      <td className="fields">
                        {item.fields.customfield_10442 == null
                          ? " "
                          : item.fields.customfield_10442.name}
                      </td>
                      <td className="fields">{PDT_Date}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableData;
