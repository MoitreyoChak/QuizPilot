import { useQuizDispatch } from "../quizContext";

function StartScreen() {
  const dispatch = useQuizDispatch();
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{15} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
