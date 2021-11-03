import React, { useState } from "react";

const Button = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickOnGood = () => {
    setGood(good + 1);
  };

  const clickOnNeutral = () => {
    setNeutral(neutral + 1);
  };

  const clickOnBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" onClick={clickOnGood} />
      <Button name="neutral" onClick={clickOnNeutral} />
      <Button name="bad" onClick={clickOnBad} />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
