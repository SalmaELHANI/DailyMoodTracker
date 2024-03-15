import React from 'react';

const MoodSelector = ({ onSelect }) => {
  const moods = ['Heureux', 'Triste', 'En colère', 'Excité', 'Calme'];

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Sélectionnez votre humeur :</h2>
      <div className="flex">
        {moods.map((mood, index) => (
          <button
            key={index}
            className="mr-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            onClick={() => onSelect(mood)}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
