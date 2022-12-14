import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  fetchProductsAdmin,
  removeProduct,
} from "../../redux/product/asyncThunk";
import { Product } from "../../redux/product/types";
import { selectFilters } from "../../redux/filters/selectors";

export const ProductBlock: React.FC<Product> = ({
  _id,
  title,
  price,
  imageUrl,
}) => {
  const dispatch = useAppDispatch();
  const { searchValue, pageValue } = useAppSelector(selectFilters);

  const onClickRemove = async () => {
    dispatch(removeProduct(_id));

    const page = pageValue ? `?page=${pageValue}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchProductsAdmin({
        page,
        search,
      })
    );
  };

  return (
    <tr className="admin-product-block">
      <td>
        <div className="admin-product-block__id">{_id}</div>
      </td>
      <td>
        <img
          className="admin-product-block__img"
          src={`http://localhost:5000${imageUrl}`}
          alt={title}
        />
      </td>
      <td>
        <div className="admin-product-block__title">{title}</div>
      </td>
      <td className="admin-product-block__price">{price.toLocaleString()} ₽</td>
      <td className="admin-product-block__actions">
        <Link
          to={`/admin/products/edit/${_id}`}
          className="admin-product-block__button-delete text-primary"
        >
          Редактировать
        </Link>
        <button
          onClick={onClickRemove}
          className="admin-product-block__button-delete text-primary"
        >
          Удалить
        </button>
      </td>
    </tr>
  );
};
