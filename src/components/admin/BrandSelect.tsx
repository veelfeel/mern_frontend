import React from "react";
import axios from "../../axios";

type PopupClick = MouseEvent & {
  path: Node[];
};

type PropType = {
  setBrand: (value: string) => void;
  brand: string;
};

export const BrandSelect: React.FC<PropType> = ({ setBrand, brand }) => {
  const [brandArray, setBrandArray] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    async function getAreas() {
      try {
        const { data } = await axios.get("/api/brands");
        setBrandArray(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAreas();
  }, []);

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
      <h2>Бренд</h2>
      <div
        ref={divRef}
        onClick={() => setOpen(!open)}
        className="input-selection"
      >
        <span>{brand}</span>
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
          {brandArray.map((x) => (
            <li
              key={x}
              onClick={() => setBrand(x)}
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
