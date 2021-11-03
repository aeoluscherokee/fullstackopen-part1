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

  const avgCal = () => {
    const goodScore = good * 1;
    const neutralScore = neutral * 0;
    const badScore = bad * -1;
    const all = good + bad + neutral;
    const avg = (goodScore + neutralScore + badScore) / all;
    return avg;
  };
  const posCal = () => {
    const all = good + bad + neutral;
    const posPercent = (good / all) * 100;
    return posPercent;
  };

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: good + bad + neutral,
    average: avgCal(),
    positive: posCal(),
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" onClick={clickOnGood} />
      <Button name="neutral" onClick={clickOnNeutral} />
      <Button name="bad" onClick={clickOnBad} />
      <h1>statistics</h1>
      <p>good {statistics.good}</p>
      <p>neutral {statistics.neutral}</p>
      <p>bad {statistics.bad}</p>
      <p>all {statistics.all}</p>
      <p>average {statistics.average}</p>
      <p>positive {statistics.positive} %</p>
    </div>
  );
};

export default App;
