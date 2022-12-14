import React from "react";

const inverterNames = ["есть", "нет"];

type PopupClick = MouseEvent & {
  path: Node[];
};

type PropType = {
  setInverter: (value: string) => void;
  inverter: string;
};

export const InverterSelect: React.FC<PropType> = ({
  setInverter,
  inverter,
}) => {
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
      <h2>Инверторная технология</h2>
      <div
        ref={divRef}
        onClick={() => setOpen(!open)}
        className="input-selection"
      >
        <span>{inverter}</span>
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
          {inverterNames.map((x) => (
            <li
              key={x}
              onClick={() => setInverter(x)}
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
