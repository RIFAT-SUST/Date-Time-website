import { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("I Love You Ikra");
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {" "}
      <div className="timeDate">
        <div className="date">
          <h1>{time.toLocaleDateString()}</h1>
        </div>
        <div className="time">
          <h1>{time.toLocaleTimeString()}</h1>
        </div>
      </div>
    </>
  );
}

export default CurrentTime;
