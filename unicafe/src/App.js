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

  const all = good + bad + neutral;
  const avgCal = () => {
    const goodScore = good * 1;
    const neutralScore = neutral * 0;
    const badScore = bad * -1;
    const avg = (goodScore + neutralScore + badScore) / all;
    return avg;
  };
  const posCal = () => {
    const all = good + bad + neutral;
    const posPercent = (good / all) * 100;
    return posPercent;
  };
  const average = avgCal();
  const positive = posCal();

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
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  );
};

export default App;
