import React, { useState } from 'react';
import MoodSelector from './components/MoodSelector';
import SubmitButton from './components/SubmitButton';
import ConfirmationMessage from './components/ConfirmationMessage';

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    if (selectedMood) {
      setSubmitted(true);
    }
  };

  return (
    <div className="container mx-auto px-4">
      {!submitted ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">Daily Mood Tracker</h1>
          <MoodSelector onSelect={handleMoodSelect} />
          <SubmitButton onSubmit={handleSubmit} />
        </div>
      ) : (
        <ConfirmationMessage mood={selectedMood} />
      )}
    </div>
  );
}

export default App;