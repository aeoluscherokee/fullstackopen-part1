import React from "react";

const Button = ({ name }) => {
  return <button>{name}</button>;
};

const App = () => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" />
      <Button name="neutral" />
      <Button name="bad" />
      <h1>statistics</h1>
      <p>good 6</p>
      <p>neutral 2</p>
      <p>bad 1</p>
    </div>
  );
};

export default App;
