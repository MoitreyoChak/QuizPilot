import { useQuiz, useQuizDispatch } from "../quizContext";

function FinishScreen() {
  const dispatch = useQuizDispatch();
  const {
    state: { totalMarksObtained, highestScoreObtained },
    totalPossibleMarks,
    ALLOWED_TIME,
  } = useQuiz();

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
          dispatch({ type: "restart", payload: ALLOWED_TIME });
        }}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
