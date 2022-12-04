import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from '../Search';
import { ProductList } from './ProductList';
import { Pagination } from '../Pagination';
import { useAppSelector } from '../../redux/store';
import { selectProducts } from '../../redux/product/selectors';

const Products: React.FC = () => {
  const location = useLocation();

  const { total, limit } = useAppSelector(selectProducts);
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="admin-products">
      <div className="admin-products__header">
        <h3>Товары</h3>
        <Link to="/admin/products/add-product" className="admin-button">
          <span>+</span>
          <div>Добавить товар</div>
        </Link>
      </div>
      {location.pathname === '/admin/products' && <Search placeholder={'Поиск товара...'} />}
      <ProductList />
      {totalPages > 1 && <Pagination />}
    </div>
  );
};

export default Products;
