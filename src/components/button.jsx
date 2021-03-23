import React from "react";
export function Buttons(props) {
  const { buttonMsg, inputType, onClick } = props;
  return (
    <div className="flex w-100 flex-column items-start ph3">
      <button
        type={inputType}
        className="btn btn-primary pt2 w-100"
        onClick={onClick}
      >
        {buttonMsg}
      </button>
    </div>
  );
}
