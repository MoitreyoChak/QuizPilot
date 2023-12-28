import { useEffect } from "react";

function Timer({ timeRemaining, dispatch }) {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  const min = Math.floor(timeRemaining / 60);
  const sec = timeRemaining % 60;

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;
