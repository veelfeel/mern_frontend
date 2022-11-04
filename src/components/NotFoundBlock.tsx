import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className="not-found-screen">
      <h2 className="not-found-screen__text">Ничего не найдено 😕</h2>
      <p>Похоже, что данная страница в нашем интернет-магазине отсутствует</p>
      <Link to="/" className="go-to-back">
        <span>Перейти к покупкам</span>
      </Link>
    </div>
  );
};
