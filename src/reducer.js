const reducer = (state, action) => {
  const {
    status,
    totalMarksObtained,
    questionNumber,
    selectedOption,
    highestScoreObtained,
    timeRemaining,
  } = state;
  const { type, payload } = action;

  switch (type) {
    case "start":
      return { ...state, status: "running" };

    case "questionSubmit":
      const {
        question: { correctOption, points },
        selected,
      } = payload;
      const marks =
        totalMarksObtained + (correctOption == selected ? points : 0);
      return { ...state, totalMarksObtained: marks, selectedOption: selected };

    case "nextQuestion":
      return {
        ...state,
        questionNumber: questionNumber + 1,
        selectedOption: -1,
      };

    case "finish quiz":
      return {
        ...state,
        status: "finished",
        highestScoreObtained:
          highestScoreObtained < totalMarksObtained
            ? totalMarksObtained
            : highestScoreObtained,
      };

    case "restart":
      return {
        ...state,
        status: "running",
        questionNumber: 0,
        selectedOption: -1,
        totalMarksObtained: 0,
        timeRemaining: payload,
      };
    case "tick":
      return {
        ...state,
        timeRemaining: timeRemaining - 1,
        status: timeRemaining == 0 ? "finished" : status,
        highestScoreObtained:
          timeRemaining == 0
            ? highestScoreObtained < totalMarksObtained
              ? totalMarksObtained
              : highestScoreObtained
            : highestScoreObtained,
      };

    default:
      throw new Error("Action not found");
  }
};

function calcHighScore(totalMarksObtained, highestScoreObtained) {
  return highestScoreObtained < totalMarksObtained
    ? totalMarksObtained
    : highestScoreObtained;
}
export default reducer;
