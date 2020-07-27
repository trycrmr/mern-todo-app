import React from "react";
import "./AlertBox.css";

const AlertBox = (props) => {
  return (
    <aside className="alertBox">
      <p>{props.message}</p>
    </aside>
  );
};

export default AlertBox;
