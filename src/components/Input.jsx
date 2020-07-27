import React, { useState } from "react";

const Input = (props) => {
  const [currentText, setCurrentText] = useState("Enter a todo.");
  const onChange = (e) => {
    setCurrentText(e.target.value);
    console.info(currentText, e.target.value);
  };
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={currentText}
      onChange={onChange}
    ></input>
  );
};

export default Input;
