import './App.css'
import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
  }, [progress]);
  return (
    <>
      <div
        className="progress-bar-box"
        style={{
          border: "1px solid",
          margin: "10px",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <div
          className="progress-bar-progress"
          style={{
            transform: `translateX(${animatedProgress - 100}%)`,
            background: "bisque",
            borderRadius: "16px",
            transition: "0.5s ease-in",
            textAlign: "right",
          }}
        >
          {`${animatedProgress}%`}
        </div>
      </div>
    </>
  );
};

export default function App() {
  const progress = [1, 10, 20, 50, 80, 100];
  return (
    <div className="App">
      <h1>Progress Bars</h1>
      {progress.map((p, i) => {
        return <ProgressBar progress={p} key={i} />;
      })}
    </div>
  );
}
