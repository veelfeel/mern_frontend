import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from '../Pagination';

import { ProductList } from './ProductList';
import { Search } from './Search';

const Products: React.FC = () => {
  return (
    <div className="admin-products">
      <div className="admin-products__header">
        <h3>Товары</h3>
        <Link to="/admin/products/add-product" className="admin-button">
          <span>+</span>
          <div>Добавить товар</div>
        </Link>
      </div>
      <Search />
      <ProductList />
      <Pagination />
    </div>
  );
};

export default Products;
