import { useState, useRef, useEffect } from "react";
import "./App.css";

const OTP_DIGITS = 5;
function App() {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (e, index) => {
    const value = e.target.value.trim();

    if (isNaN(value)) return;

    const newArr = [...inputArr];
    newArr[index] = value.slice(-1);
    setInputArr(newArr);

    // changing the focus to next index
    value && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    const value = e.target.value.trim();

    if (!value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <div>
        <h1>OTP Input</h1>

        <div style={{ display: "flex", gap: "10px", flexDirection: "row" }}>
          {inputArr.map((inp, index) => {
            return (
              <input
                type="text"
                key={index}
                value={inputArr[index]}
                onChange={(e) => handleOnChange(e, index)}
                style={{
                  border: "1px solid",
                  height: "40px",
                  width: "40px",
                  fontSize: "20px",
                  textAlign: "center",
                }}
                ref={(input) => (refArr.current[index] = input)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
