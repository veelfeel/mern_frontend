import React from "react";

import { useAppSelector } from "../../redux/store";
import { selectProducts } from "../../redux/product/selectors";
import { Product } from "../../redux/product/types";

import { Loader } from "../Loader";
import { ErrorLoading } from "./ErrorLoading";
import { ProductBlock } from "./ProductBlock";

export const ProductList: React.FC = () => {
  const { products, status, total } = useAppSelector(selectProducts);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Изображение</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Действия</th>
          </tr>
        </thead>
      </table>
      {status === "loading" ? (
        <Loader className={"admin-product-block"} />
      ) : status === "error" ? (
        <ErrorLoading />
      ) : total === 0 ? (
        <div className="product-not-found">
          <h2>Товары не найдены 😕</h2>
          <p>Попробуйте изменить параметры поиска</p>
        </div>
      ) : (
        <table>
          <tbody>
            {products.map((obj: Product) => (
              <ProductBlock key={obj._id} {...obj} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
