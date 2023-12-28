import Options from "./Options";

function Question({ question, dispatch, selectedOption }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        selectedOption={selectedOption}
      />
    </div>
  );
}

export default Question;
