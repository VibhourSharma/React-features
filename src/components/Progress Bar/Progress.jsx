import { useState } from "react";
import ProgressBar from "./ProgressBar";

const Progress = () => {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 0));
  };

  return (
    <div className="progress-container">
      <h3>/ Progress Bar </h3>
      <ProgressBar value={progress} />
      <button onClick={handleButtonClick}>Increase Progress</button>
    </div>
  );
};

export default Progress;
