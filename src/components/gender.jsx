import React from "react";
export function selectGender(props) {
  const { name, gender } = props;
  return (
    <div>
      <input type="radio" id={name} name={gender}>
        <label>{gender}</label>
      </input>
    </div>
  );
}
export function Country(props) {
  const { inputName, onChange } = props;
  const selection = (e) => {
    console.log(e.target.value);
    onChange?.(inputName, e.target.value);
  };
  return (
    <div className="flex w-100 flex-column items-start ph3">
      <label>Country</label>

      <select className="pa2 br3 bw1 w-100" onChange={selection}>
        <option>female</option>
        <option>male</option>
      </select>
    </div>
  );
}

export function CheckBox(props) {
  const { checklabel } = props;
  return (
    <label className="pa1">
      <input type="checkBox" name={checklabel} />
      {checklabel}
    </label>
  );
}
