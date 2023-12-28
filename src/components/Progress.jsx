function Progress({
  totalMarksObtained,
  questionNumber,
  numQuestions,
  totalPossibleMarks,
}) {
  return (
    <header className="progress">
      <progress value={questionNumber} max={numQuestions} />

      <p>
        Question <strong>{questionNumber}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{totalMarksObtained}</strong> / {totalPossibleMarks}
      </p>
    </header>
  );
}

export default Progress;
