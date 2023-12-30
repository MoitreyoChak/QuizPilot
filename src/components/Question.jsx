import { useQuiz } from "../quizContext";
import Options from "./Options";

function Question() {
  const {
    state: { questionNumber },
    questions,
  } = useQuiz();
  const question = questions[questionNumber];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
