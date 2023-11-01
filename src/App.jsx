import React from "react";
import "./App.css";
import "../src/styles/main.css"
import { FifthH } from "./components/FifthH"
import { SecondH } from "./components/SecondH";
import { ThirdH } from  "./components/ThirdH";
import { FourthH } from "./components/FourthH";
import { SixthH } from "./components/SixthH";
import { Inputtext } from "./components/Inputtext";
import { Inputnumber } from "./components/Inputnumber";
import { Inputcheckbox } from "./components/Inputcheckbox";
import { Paragraph } from "./components/Paragraph";

const App = () => {
  return (
    <div className="App">

      <FifthH />
      <SecondH />
      <ThirdH /> 
      <FourthH />
      <SixthH />

      <Inputtext />
      <Inputnumber />
      <Inputcheckbox />

      <Paragraph />

      <span />
      
    </div>
  );
}

export default App;
