import Header from "./Header";
import StartScreen from "./StartScreen";
import Progress from "./Progress";
import Question from "./Question";
import Footer from "./Footer";
import Timer from "./Timer";
import NextButton from "./NextButton";
import Main from "./Main";
import FinishScreen from "./FinishScreen";
import { useQuiz } from ".././quizContext";

import reducer from ".././reducer";

import { createContext, useContext, useReducer } from "react";

const App = () => {
  // const {
  //   status,
  //   questionNumber,
  //   selectedOption,
  //   totalMarksObtained,
  //   highestScoreObtained,
  //   timeRemaining,
  // } = state;

  const {
    state: { status },
  } = useQuiz();

  return (
    <div className="app">
      <Header />
      {status == "init" && <StartScreen />}
      {status == "running" && (
        <Main>
          <Progress />
          <Question />
          <Footer>
            <Timer />
            <NextButton />
          </Footer>
        </Main>
      )}
      {status == "finished" && <FinishScreen />}
    </div>
  );
};
// function Main({ children }) {
//   console.log(10);
//   return <main className="main">{children}</main>;
// }
export default App;
