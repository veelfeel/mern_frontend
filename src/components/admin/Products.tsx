import React from 'react';
import { Link } from 'react-router-dom';

import { selectProducts } from '../../redux/product/selectors';
import { Product } from '../../redux/product/types';
import { useAppSelector } from '../../redux/store';

import { Loader } from '../Loader';
import { ProductBlock } from './ProductBlock';

const Products: React.FC = () => {
  const { products, status } = useAppSelector(selectProducts);

  const productBlocks = products.map((obj: Product) => <ProductBlock key={obj._id} {...obj} />);

  return (
    <div className="admin-products">
      <div className="admin-products__header">
        <h3>Товары</h3>
        <Link to="/admin/products/add-product" className="admin-button">
          <span>+</span>
          <div>Добавить товар</div>
        </Link>
      </div>
      <input />
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
        <tbody>
          {status === 'error' ? (
            <div>
              <h2>Произошла ошибка 😕</h2>
              <p>К сожалению, не удалось загрузить товары. Попробуйте повторить попытку позже.</p>
            </div>
          ) : status === 'loading' ? (
            <Loader />
          ) : (
            productBlocks
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
