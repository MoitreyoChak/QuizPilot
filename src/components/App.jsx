import Header from "./Header";
import StartScreen from "./StartScreen";
import Progress from "./Progress";
import Question from "./Question";
import Footer from "./Footer";
import Timer from "./Timer";
import NextButton from "./NextButton";
import Main from "./Main";
import FinishScreen from "./FinishScreen";

import reducer from ".././reducer";

import questions from "../../public/questions";
import { useReducer } from "react";

const numQuestions = questions.reduce((sum) => sum + 1, 0);
const totalPossibleMarks = questions.reduce(
  (marks, question) => marks + question.points,
  0
);
const ALLOWED_TIME = 5;

const App = () => {
  const initialState = {
    status: "init",
    questionNumber: 0,
    selectedOption: -1,
    totalMarksObtained: 0,
    highestScoreObtained: 0,
    timeRemaining: ALLOWED_TIME,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    status,
    questionNumber,
    selectedOption,
    totalMarksObtained,
    highestScoreObtained,
    timeRemaining,
  } = state;

  return (
    <div className="app">
      <Header />
      {status == "init" && <StartScreen dispatch={dispatch} />}
      {status == "running" && (
        <Main>
          <Progress
            totalMarksObtained={totalMarksObtained}
            questionNumber={questionNumber + 1}
            numQuestions={numQuestions}
            totalPossibleMarks={totalPossibleMarks}
          />
          <Question
            selectedOption={selectedOption}
            question={questions[questionNumber]}
            dispatch={dispatch}
          />
          <Footer>
            <Timer timeRemaining={timeRemaining} dispatch={dispatch} />
            <NextButton
              dispatch={dispatch}
              selectedOption={selectedOption}
              questionNumber={questionNumber + 1}
              numQuestions={numQuestions}
            />
          </Footer>
        </Main>
      )}
      {status == "finished" && (
        <FinishScreen
          dispatch={dispatch}
          totalMarksObtained={totalMarksObtained}
          totalPossibleMarks={totalPossibleMarks}
          highestScoreObtained={highestScoreObtained}
        />
      )}
    </div>
  );
};
export default App;
