import { useState } from "react";

function Options({ question, selectedOption, dispatch }) {
  const { options, correctOption } = question;

  const handleClick = (i) => {
    dispatch({
      type: "questionSubmit",
      payload: { question, selected: i },
    });
  };

  return (
    <div className="options">
      {options.map((option, i) => (
        <button
          className={`btn btn-option ${i == selectedOption ? "answer" : ""} ${
            selectedOption != -1 && i == correctOption
              ? "correct"
              : i == selectedOption
              ? "wrong"
              : ""
          }`}
          key={option}
          disabled={selectedOption != -1}
          onClick={() => handleClick(i)}
        >
          {option}
        </button>
      ))}
    </div>
  );
  //return (

  // <div className="options">
  //   <button className={`btn btn-option answer`}>{1}</button>

  //   <button className={`btn btn-option correct`}>{2}</button>

  //   <button className={`btn btn-option wrong`}>{2}</button>
  // </div>
  //);
}

export default Options;
