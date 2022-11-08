import React from 'react';

export const Loader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <>
      {[...Array(5)].map((val, index) => (
        <div key={index} className={`${className} skeleton`}></div>
      ))}
    </>
  );
};
