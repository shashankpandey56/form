import React, { useState } from "react";

export function InputField(props) {
  const { label, inputName, inputType, onChange } = props;
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const showDetails = (e) => {
    const inputValue = e.target.value;
    console.log("@@@@@@");
    console.log(inputValue);
    setInputValue(inputValue);
    onChange?.(inputValue, e.target.name);
  };
  const delerrors = (e) => {
    setError("");
  };
  const validateUser = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    if (!inputValue) {
      setError(`*${inputName} is required`);
      return;
    }
    if (inputName === "Email") {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(inputValue)) {
        setInputValue(inputValue);
      } else {
        setError(`please enter valid ${inputName}`);
      }
    }
  };

  return (
    <div className="flex w-100 flex-column items-start ph3">
      <label className="mv2">{label}</label>
      <input
        className="pa2 br3 bw1 w-100"
        type={inputType}
        id={inputName}
        name={inputName}
        onBlur={validateUser}
        onChange={showDetails}
        onFocus={delerrors}
      />
      <div className="w-100 red b">{error}</div>
    </div>
  );
}
