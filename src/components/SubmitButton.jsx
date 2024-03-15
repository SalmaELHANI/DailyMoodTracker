import React from 'react';

const SubmitButton = ({ onSubmit }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase text-white tracking-widest"
      onClick={onSubmit}
    >
      Soumettre
    </button>
  );
};

export default SubmitButton;