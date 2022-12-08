import React from "react";

const inverter = ["есть", "нет"];

type PopupClick = MouseEvent & {
  path: Node[];
};

export const InverterSelect: React.FC = ({ value, setValue }) => {
  const [open, setOpen] = React.useState(false);

  const inputRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (inputRef.current && !_event.path.includes(inputRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <h2>Инверторная технология</h2>
      <div
        ref={inputRef}
        onClick={() => setOpen(!open)}
        className="input-selection"
      >
        <span>{value}</span>
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
          {inverter.map((x) => (
            <li onClick={() => setValue(x)} className="input-selection-item">
              {x}
            </li>
          ))}
        </ul>
      }
    </>
  );
};
