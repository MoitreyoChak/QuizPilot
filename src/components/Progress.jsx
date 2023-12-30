import { useQuiz } from "../quizContext";

function Progress() {
  const {
    state: { totalMarksObtained, questionNumber },
    numQuestions,
    totalPossibleMarks,
  } = useQuiz();

  return (
    <header className="progress">
      <progress value={questionNumber + 1} max={numQuestions} />

      <p>
        Question <strong>{questionNumber + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{totalMarksObtained}</strong> / {totalPossibleMarks}
      </p>
    </header>
  );
}

export default Progress;
