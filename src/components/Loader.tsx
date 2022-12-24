import React from "react";

export const Loader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <div key={index} className={`${className} skeleton`}></div>
      ))}
    </>
  );
};
