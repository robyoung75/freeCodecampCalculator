import React from "react";
import "./CalcDisplay.css";

import CalcFormulaDisplay from "../CalcFormulaDisplay/CalcFormulaDisplay";
function CalcDisplay({ displayVal, formula }) {
  return (
    <div className="calcDisplay">
      <CalcFormulaDisplay formula={formula} />
      <div id="display">{displayVal}</div>
    </div>
  );
}

export default CalcDisplay;
