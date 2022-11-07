import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../redux/store';
import { fetchRemoveProduct } from '../../redux/product/asyncThunk';
import { Product } from '../../redux/product/types';

export const ProductBlock: React.FC<Product> = ({ _id, title, price, imageUrl }) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    dispatch(fetchRemoveProduct(_id));
  };

  return (
    <tr>
      <td>
        <div className="admin-product-block__id">{_id}</div>
      </td>
      <td>
        <img className="admin-product-block__img" src={imageUrl} alt={title} />
      </td>
      <td>
        <Link to={`/product/${_id}`}>
          <div className="admin-product-block__title">{title}</div>
        </Link>
      </td>
      <td className="admin-product-block__price">{price.toLocaleString()} ₽</td>
      <td>
        <button onClick={onClickRemove} className="admin-product-block__button-delete text-primary">
          Удалить
        </button>
      </td>
    </tr>
  );
};
