import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statisticline = ({ text, value }) => (
  <p>
    {text}: {value}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  if (total == 0) {
    return <p>No feedback given</p>;
  }
  const average = total == 0 ? 0 : (good - bad) / total;
  const positivePercentage = total == 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      <Statisticline text="good" value={good} />
      <Statisticline text="neutral" value={neutral} />
      <Statisticline text="bad" value={bad} />
      <Statisticline text="total" value={total} />
      <Statisticline text="average" value={average.toFixed(2)} />
      <Statisticline
        text="positivePercentage"
        value={positivePercentage.toFixed(2)}
      />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
