import React from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <div className="admin-products">
      <div className="admin-products__header">
        <h3>Товары</h3>
        <Link to="/admin/products/add-product" className="admin-products__add-product">
          <span>+</span>
          <div>Добавить товар</div>
        </Link>
      </div>
      <input />
    </div>
  );
};

export default Products;
