import React from "react";
import { useState } from "react";
import "../src/App.css";
const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  //reset the output
  const reset = () => {
    setResult("");
  };

  const calculate = (e) => {
    setResult(eval(result));
  };
  const image = {
    width: "10%",
    minWidth: "50px",
    marginBottom: "5px",
    backgroundColor: "#ffffff",
  };
  return (
    <div className='container'>
      <body>
        <div
          style={{
            backgroundColor: " #2f3437 ",
            display: "flex",
          }}
        >
          <p
            style={{
              width: "120%",
              color: "#fff",
              marginTop: "20px",
              fontSize: "15px",
            }}
          >
            CALCULATOR
          </p>
        </div>
        <form>
          <input type='text' value={result} />
        </form>
        <div className='keypad'>
          <button name='7' onClick={handleClick}>
            7
          </button>
          <button name='8' onClick={handleClick}>
            8
          </button>
          <button name='9' onClick={handleClick}>
            9
          </button>
          <button name='/' onClick={handleClick}>
            /
          </button>
          <button name='4' onClick={handleClick}>
            4
          </button>
          <button name='5' onClick={handleClick}>
            5
          </button>
          <button name='6' onClick={handleClick}>
            6
          </button>
          <button name='*' onClick={handleClick}>
            *
          </button>
          <button name='0' onClick={handleClick}>
            0
          </button>
          <button name='.' onClick={handleClick}>
            .
          </button>
          <button id='result' onClick={calculate}>
            =
          </button>
          <button name='+' onClick={handleClick}>
            +
          </button>
        </div>

        <footer>
          <p onClick={reset}>reset </p>
        </footer>
      </body>
    </div>
  );
};
export default App;
