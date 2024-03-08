import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter > 14) {
      const h1 = document.querySelector("h1");
      h1.innerText = "Counter value cannot be greater than 15";
    } else {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const removeValue = () => {
    if (counter < 1) {
      const h1 = document.querySelector("h1");
      h1.innerText = "Counter Value cannot be less than 0";
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default Counter;
