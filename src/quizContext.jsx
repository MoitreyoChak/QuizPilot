import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import questions from "../public/questions";

const ALLOWED_TIME = 300;

const QuizContext = createContext();
const QuizDispatchContext = createContext();

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider
      value={{
        state,
        numQuestions,
        totalPossibleMarks,
        ALLOWED_TIME,
        questions,
      }}
    >
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}

export function useQuizDispatch() {
  return useContext(QuizDispatchContext);
}

const initialState = {
  status: "init",
  questionNumber: 0,
  selectedOption: -1,
  totalMarksObtained: 0,
  highestScoreObtained: 0,
  timeRemaining: ALLOWED_TIME,
};

const numQuestions = questions.reduce((sum) => sum + 1, 0);
const totalPossibleMarks = questions.reduce(
  (marks, question) => marks + question.points,
  0
);
