import React, { useState } from 'react';

const DailyGoals = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, { text: newGoal, completed: false }]);
      setNewGoal('');
    }
  };

  const toggleGoal = (index) => {
    setGoals(
      goals.map((goal, i) =>
        i === index ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  return (
    <div>
      <h2>Daily Goals</h2>
      <input
        type="text"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        placeholder="Add a new goal"
      />
      <button onClick={addGoal}>Add Goal</button>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={goal.completed}
              onChange={() => toggleGoal(index)}
            />
            {goal.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyGoals;