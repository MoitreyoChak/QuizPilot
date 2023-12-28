function NextButton({
  dispatch,
  questionNumber,
  numQuestions,
  selectedOption,
}) {
  const handleClickNext = () => {
    dispatch({
      type: "nextQuestion",
    });
  };
  const handleClickFinish = () => {
    dispatch({
      type: "finish quiz",
    });
  };
  if (questionNumber == numQuestions) {
    return (
      <button
        className="btn btn-ui"
        disabled={selectedOption == -1}
        onClick={handleClickFinish}
      >
        Finish
      </button>
    );
  }
  return (
    <button
      className="btn btn-ui"
      onClick={handleClickNext}
      disabled={selectedOption == -1}
    >
      Next
    </button>
  );

  // return (
  //   <button className="btn btn-ui">
  //     Finish
  //   </button>
  // );
}

export default NextButton;
