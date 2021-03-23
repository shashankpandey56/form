import React, { useState } from "react";
import { Country, CheckBox } from "./components/gender";
import { Buttons } from "./components/button";
import { InputField } from "./components/input-field";

function App() {
  const [alldetails, setAllDetails] = useState();
  const handleChange = (data, name) => {
    console.log("####", data, name);
    setAllDetails({ ...alldetails, [name]: data });
  };
  const submitForm = (e) => {
    console.log(alldetails);
  };
  const handleClick = () => {
    console.log("here");
    for (var i = 0; i < 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, 100);
    }
  };
  const handleGender = (name, data) => {
    console.log("gggg", data);
    setAllDetails({ ...alldetails, [name]: data });
    console.log(alldetails);
  };
  return (
    <div>
      <header
        className="flex-row flex white ph4"
        style={{ backgroundColor: "#282c34" }}
      >
        <h3> My App</h3>
      </header>
      <div className="container">
        <div className="flex-container">
          <form>
            <div className="row">
              <div className="col-md-5">
                <InputField
                  inputType="text"
                  label="FirstName"
                  inputName="FirstName"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-5">
                <InputField
                  inputType="text"
                  label="LastName"
                  inputName="LastName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <InputField
                  inputType="text"
                  label="Email"
                  inputName="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-5">
                <InputField
                  inputType="password"
                  label="PassWord"
                  inputName="PassWord"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <Country inputName="Gender" onChange={handleGender} />
              </div>
              <div className="col-md-5 pt4 pl2">
                <CheckBox checklabel="PAN" />
                <CheckBox checklabel="ADHAR" />
                <CheckBox checklabel="ADMIT CARD" />
              </div>
            </div>
            <div className="row ">
              <div className="col-sm-5 pt3">
                <Buttons buttonMsg="Submit" onClick={submitForm} />
              </div>
              <div className="col-sm-5 pt3">
                <Buttons buttonMsg="Login" onClick={handleClick} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
