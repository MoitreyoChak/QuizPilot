function FinishScreen({
  totalMarksObtained,
  totalPossibleMarks,
  highestScoreObtained,
  dispatch,
}) {
  return (
    <>
      <p className="result">
        <span>📈</span> You scored <strong>{totalMarksObtained}</strong> out of{" "}
        {totalPossibleMarks} (
        {Math.ceil((totalMarksObtained / totalPossibleMarks) * 100)}
        %)
      </p>
      <p className="highscore">(Highscore: {highestScoreObtained} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
