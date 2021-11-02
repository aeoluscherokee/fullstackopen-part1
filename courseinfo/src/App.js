import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>;
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const sum = (array) => {
    for (
      var index = 0, length = array.length, sum = 0;
      index < length;
      sum += array[index++]
    );
    return sum;
  };
  const exercises = props.parts.map((part) => part.exercises);
  const result = sum(exercises);

  return <p>Number of exercises {result}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
