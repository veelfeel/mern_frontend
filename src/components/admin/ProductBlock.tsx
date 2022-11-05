import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../redux/product/types';

export const ProductBlock: React.FC<Product> = ({ _id, name, price, imageUrl }) => {
  return (
    <tr>
      <td className="admin-product-block__id">{_id}</td>
      <td>
        <img className="admin-product-block__img" src={imageUrl} alt={name} />
      </td>
      <td>
        <Link to={`/product/${_id}`}>
          <div className="admin-product-block__title">{name}</div>
        </Link>
      </td>
      <td className="admin-product-block__price">{price.toLocaleString()} ₽</td>
      <td>
        <button className="admin-product-block__button-delete text-primary">Удалить</button>
      </td>
    </tr>
  );
};
