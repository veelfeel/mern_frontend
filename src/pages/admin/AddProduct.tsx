import React from "react";

const AddProduct: React.FC = () => {
  return (
    <div className="admin-add-product">
      <h1>Добавить товар</h1>
      <h2>Название</h2>
      <input type="text" />
      <h2>Инверторная технология</h2>
      <input type="text" />
      <h2>Площадь помещения</h2>
      <input type="text" />
      <h2>Бренд</h2>
      <input type="text" />
      <h2>Страна-производитель</h2>
      <input type="text" />
      <h2>Цена</h2>
      <input type="text" />
      <h2>Изображения</h2>
      <input type="file" />
      <h2>Рейтинг</h2>
      <input type="text" />
      <button className="admin-button">Сохранить</button>
    </div>
  );
};

export default AddProduct;
