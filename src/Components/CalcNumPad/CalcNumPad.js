import React from "react";
import "./CalcNumPad.css";

function CalcNumPad({ btnNumbers, handleNumInput, handleDecimal }) {
  return (
    <div className="calcNumPad">
      {btnNumbers.map((obj) => (
        <button
          id={obj.id}
          key={obj.num}
          className="btn btn-secondary calcNumPad__btn"
          value={obj.num}
          onClick={handleNumInput}
        >
          {obj.num}
        </button>
      ))}

      <div className="calc__container btm">
        <button
          id="zero"
          className="btn btn-secondary button__zero"
          value="0"
          onClick={handleNumInput}
        >
          0
        </button>
        <button
          id="decimal"
          className="btn btn-secondary calcNumPad__btn"
          value="."
          onClick={handleDecimal}
        >
          .
        </button>
      </div>
    </div>
  );
}

export default CalcNumPad;
