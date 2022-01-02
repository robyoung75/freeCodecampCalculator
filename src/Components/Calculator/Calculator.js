import React, { useState } from "react";
import { evaluate } from "mathjs";
import { btnFunctions, btnNumbers } from "../../assets/calcData";
import CalcFuncPad from "../CalcFuncPad/CalcFuncPad";
import CalcNumPad from "../CalcNumPad/CalcNumPad";
import CalcDisplay from "../CalcDisplay/CalcDisplay";
import "./Calculator.css";

const Calculator = () => {
  const [displayVal, setDisplayVal] = useState("0");
  const [formula, setFormula] = useState("");
  const [previousValue, setPreviousValue] = useState("");

  const isOperator = /[x/+-]/;
  const endsWithOperator = /[x/+-]$/;
  const endsWithNegSign = /\d[x/+-]{1}-$/;

  const handleClear = (e) => {
    e.preventDefault();
    setDisplayVal("0");
    setPreviousValue("");
    setFormula("");
  };

  const handleNumInput = (e) => {
    e.preventDefault();
    let value = e.target.value;

    // does not allow the formula to start with a 0 value
    if (displayVal === "0" && value !== "0") {
      setDisplayVal(value);
      setFormula(value);
    }

    if (
      displayVal !== "0" &&
      !endsWithOperator.test(displayVal) &&
      formula !== ""
    ) {
      setDisplayVal(displayVal + value);
      setFormula(formula + value);
    }

    if (
      displayVal !== "0" &&
      endsWithOperator.test(displayVal) &&
      formula !== ""
    ) {
      setDisplayVal(value);
      setFormula(formula + value);
    }
  };

  const handleOperator = (e) => {
    e.preventDefault();
    let value = e.target.value;

    // allows for the formula to start with a negative sign but no other operators
    if (displayVal === "0" && formula === "" && value === "-") {
      setDisplayVal(value);
      setFormula(value);
    }
    // eliminates the formula from starting with a double negative
    if (formula !== "" && formula !== "-") {
      setDisplayVal(value);
      setFormula(formula + value);
    }
    if (
      formula !== "" &&
      formula !== "-" &&
      endsWithOperator.test(formula) &&
      previousValue === ""
    ) {
      setDisplayVal(value);

      if (!endsWithNegSign.test(formula + value)) {
        console.log(
          "!endsWithNegSign.test(formula + value)",
          !endsWithNegSign.test(formula + value)
        );
        setDisplayVal(value);
        setFormula(formula.slice(0, -1) + value);
      }
      if (!endsWithNegSign.test(formula + value) && value === "-") {
        console.log(
          "!endsWithNegSign.test(formula + value)",
          !endsWithNegSign.test(formula + value)
        );
        setDisplayVal(value);
        setFormula(formula.slice(0, -2) + value);
      }
      if (endsWithNegSign.test(formula) && value !== "-") {
        console.log(
          "endsWithNegSign.test(formula) && value !== - ",
          endsWithNegSign.test(formula) && value !== "-"
        );
        setDisplayVal(value);
        setFormula(formula.slice(0, -2) + value);
      }
    }

    if (previousValue !== "") {
      setFormula(previousValue + value);
      setPreviousValue("");
    }
  };

  const handleDecimal = (e) => {
    e.preventDefault(e);
    let value = e.target.value;

    if (displayVal === "0") {
      setDisplayVal(displayVal + value);
      setFormula(displayVal + value);
    }

    if (displayVal !== "0" && formula !== "") {
      setDisplayVal(displayVal + value);
      setFormula(formula + value);
    }

    if (isOperator.test(displayVal)) {
      setDisplayVal("0" + value);
      setFormula(formula + "0" + value);
    }

    if (displayVal.includes(".")) {
      setDisplayVal(displayVal);
      setFormula(formula);
    }
  };

  const handleEval = (e) => {
    e.preventDefault();
    let formulaString = formula;
    formulaString = formulaString.replace(/x+/g, "*");
    let answer = evaluate(formulaString);
    setFormula(formula + "=" + answer);
    setDisplayVal(answer);
    setPreviousValue(answer);
  };

  return (
    <div className="calculator">
      <CalcDisplay displayVal={displayVal} formula={formula} />
      <CalcNumPad
        btnNumbers={btnNumbers}
        handleNumInput={handleNumInput}
        handleDecimal={handleDecimal}
      />
      <CalcFuncPad
        btnFunctions={btnFunctions}
        handleClear={handleClear}
        handleOperator={handleOperator}
        handleEval={handleEval}
      />
    </div>
  );
};

export default Calculator;
