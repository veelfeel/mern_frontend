import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="overlay" id="loader-overlay">
      <div className="spinner"></div>
    </div>
  );
};
