import React from "react";
import "./App.css";
import "../src/styles/main.css"
import { FirstH } from "./components/FirstH";
import { SecondH } from "./components/SecondH";
import { ThirdH } from  "./components/ThirdH";
import { FourthH } from "./components/FourthH";
import { FifthH } from "./components/FifthH"
import { SixthH } from "./components/SixthH";
import { Inputtext } from "./components/Inputtext";
import { Inputnumber } from "./components/Inputnumber";
import { InputTel } from "./components/InputTel";
import { Paragraph } from "./components/Paragraph";
import { Span } from "./components/Span";

const App = () => {
  return (
    <div className="App">

      <FirstH />
      <SecondH />
      <ThirdH /> 
      <FourthH />
      <FifthH />  
      <SixthH />
      <Inputtext />
      <Inputnumber />
      <InputTel />

      <Paragraph />

      <Span />
      
    </div>
  );
}

export default App;
