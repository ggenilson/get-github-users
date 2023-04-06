import { useState } from "react";
import GithubUsers from "./GithubUsers";

function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");

  //arrow function
  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  const addNewCounterValue = (newValue: number) => {
    setCounter(newValue);
  };

  return (
    <div>
      <GithubUsers />
      <h1>{counter}</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => addNewCounterValue(parseInt(value))}>Add</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
