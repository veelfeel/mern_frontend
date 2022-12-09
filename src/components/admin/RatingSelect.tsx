import React from "react";

const ratingNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

type PopupClick = MouseEvent & {
  path: Node[];
};

type PropType = {
  setRating: React.Dispatch<React.SetStateAction<string>>;
  rating: string;
};

export const RatingSelect: React.FC<PropType> = ({ setRating, rating }) => {
  const [open, setOpen] = React.useState(false);

  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (divRef.current && !_event.path.includes(divRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <h2>Рейтинг</h2>
      <div
        ref={divRef}
        onClick={() => setOpen(!open)}
        className="input-selection"
      >
        <span>{rating}</span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 32 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 46L2.14359 26.5L29.8564 26.5L16 46Z" fill="#9b9b9b" />
          <path d="M16 0L29.8564 19.5H2.14359L16 0Z" fill="#9b9b9b" />
        </svg>
      </div>
      {
        <ul
          className={
            open
              ? "input-selection-list input-selection-list--active"
              : "input-selection-list"
          }
        >
          {ratingNames.map((x) => (
            <li
              key={x}
              onClick={() => setRating(x)}
              className="input-selection-item"
            >
              {x}
            </li>
          ))}
        </ul>
      }
    </>
  );
};
