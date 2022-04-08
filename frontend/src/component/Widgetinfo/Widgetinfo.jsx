import React from "react";
import "./Widgetinfo.css";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Widgetinfo({ data }) {
  return (
    <div className="widget">
      <div className="widgetItem">
        <span className="widgetTitle">Total Tickets</span>
        <div className="totalTicketsContainer">
          <span className="totalTickets">{data && data.total}</span>
        </div>
      </div>
      <div className="widgetItem">
        <span className="widgetTitle">Open Tickets</span>
        <div className="totalTicketsContainer">
          <span className="totalTickets">
            1380
            <OpenInNewIcon />
          </span>
        </div>
      </div>
      <div className="widgetItem">
        <span className="widgetTitle">Close Tickets</span>
        <div className="totalTicketsContainer">
          <span className="totalTickets">
            8<CloseIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
