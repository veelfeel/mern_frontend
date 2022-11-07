import React from 'react';

import { useAppSelector } from '../../redux/store';
import { selectProducts } from '../../redux/product/selectors';
import { Product } from '../../redux/product/types';

import { Loader } from '../Loader';
import { ErrorLoading } from './ErrorLoading';
import { ProductBlock } from './ProductBlock';

export const ProductList: React.FC = () => {
  const { products, status } = useAppSelector(selectProducts);
  const productBlocks = products.map((obj: Product) => <ProductBlock key={obj._id} {...obj} />);

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    return <ErrorLoading />;
  }

  return (
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
      <tbody>{productBlocks}</tbody>
    </table>
  );
};
