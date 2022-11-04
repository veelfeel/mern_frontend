import React from 'react';

export const AddFavouritesButton: React.FC = () => {
  return (
    <button
      className="product-block__favourites-button border-primary"
      title="Добавить в избранное">
      <svg viewBox="0 0 44 39">
        <path d="M5.09726 5.01265C9.22694 0.995783 15.9225 0.995783 20.0522 5.01265L22 6.90728L23.9478 5.01265C28.0775 0.995783 34.7731 0.995783 38.9027 5.01265C43.0324 9.02952 43.0324 15.5421 38.9027 19.559L22 36L5.09726 19.559C0.96758 15.5421 0.96758 9.02952 5.09726 5.01265Z" />
      </svg>
    </button>
  );
};
