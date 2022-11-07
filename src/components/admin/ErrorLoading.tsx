import React from 'react';

export const ErrorLoading: React.FC = () => {
  return (
    <div>
      <h2>Произошла ошибка 😕</h2>
      <p>К сожалению, не удалось загрузить товары. Попробуйте повторить попытку позже.</p>
    </div>
  );
};
