import React from "react";
import { Link } from "react-router-dom";
import { InverterSelect } from "../../components/admin/InverterSelect";

const AddProduct: React.FC = () => {
  const [value, setValue] = React.useState("есть");

  return (
    <div className="admin-add-product">
      <div className="admin-add-product__header">
        <Link to="/admin/products">
          <svg
            width="26"
            height="26"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="45"
              height="45"
              rx="3.5"
              stroke="#434343"
            />
            <path
              d="M12.2929 22.2929C11.9024 22.6834 11.9024 23.3166 12.2929 23.7071L18.6569 30.0711C19.0474 30.4616 19.6805 30.4616 20.0711 30.0711C20.4616 29.6805 20.4616 29.0474 20.0711 28.6569L14.4142 23L20.0711 17.3431C20.4616 16.9526 20.4616 16.3195 20.0711 15.9289C19.6805 15.5384 19.0474 15.5384 18.6569 15.9289L12.2929 22.2929ZM33 22L13 22L13 24L33 24L33 22Z"
              fill="#373737"
            />
          </svg>
        </Link>
        <h1>Добавить товар</h1>
      </div>
      <h2>Название</h2>
      <input placeholder="Введите название" type="text" />
      <InverterSelect value={value} />
      <h2>Площадь помещения</h2>
      <input placeholder="25 м² - 30 м²" type="text" />
      <h2>Бренд</h2>
      <input placeholder="Например, Haier" type="text" />
      <h2>Страна-производитель</h2>
      <input placeholder="Например, Вьетнам" type="text" />
      <h2>Цена</h2>
      <input placeholder="22 000" type="text" />
      <h2>Изображения</h2>
      <input type="file" />
      <h2>Рейтинг</h2>
      <input placeholder="От 1 до 10" type="text" />
      <button className="admin-button">Сохранить</button>
    </div>
  );
};

export default AddProduct;
