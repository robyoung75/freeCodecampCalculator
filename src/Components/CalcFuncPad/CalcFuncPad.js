import React from "react";
import "./CalcFuncPad.css";

function CalcFuncPad({
  btnFunctions,
  handleClear,
  handleOperator,
  handleEval,
}) {
  return (
    <div className="calcFuncPad">
      <div className="calc__container">
        <button
          id="clear"
          className="btn btn-primary button__ac"
          onClick={handleClear}
        >
          {btnFunctions.ac}
        </button>
      </div>

      <div className="calc__container">
        <button
          id="multiply"
          className="btn btn-primary button__cust"
          value="x"
          onClick={handleOperator}
        >
          {btnFunctions.multiply}
        </button>
        <button
          id="divide"
          className="btn btn-primary button__cust"
          value="/"
          onClick={handleOperator}
        >
          {btnFunctions.div}
        </button>
      </div>

      <div className="calc__container__vert">
        <button
          id="add"
          className="btn btn-primary button__sum"
          value="+"
          onClick={handleOperator}
        >
          {btnFunctions.sum}
        </button>
      </div>

      <div className="calc__container__vert">
        <button
          id="subtract"
          className="btn btn-primary button__subEqual"
          value="-"
          onClick={handleOperator}
        >
          {btnFunctions.sub}
        </button>
        <button
          id="equals"
          className="btn btn-primary button__subEqual"
          onClick={handleEval}
        >
          {btnFunctions.equal}
        </button>
      </div>
    </div>
  );
}

export default CalcFuncPad;
