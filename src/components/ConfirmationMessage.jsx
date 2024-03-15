import React from 'react';

const ConfirmationMessage = ({ mood }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-2">Merci pour votre retour !</h2>
      <p className="text-lg mb-4">Votre humeur du jour : {mood}</p>
    </div>
  );
};
export default ConfirmationMessage;