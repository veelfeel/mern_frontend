import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "../../components/Search";
import { ProductList } from "../../components/admin/ProductList";
import { Pagination } from "../../components/Pagination";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectProducts } from "../../redux/product/selectors";
import { fetchProductsAdmin } from "../../redux/product/asyncThunk";
import { selectFilters } from "../../redux/filters/selectors";

const Products: React.FC = () => {
  const { total, limit, status } = useAppSelector(selectProducts);
  const totalPages = Math.ceil(total / limit);

  const location = useLocation();

  const dispatch = useAppDispatch();
  const { searchValue, pageValue } = useAppSelector(selectFilters);

  const getProducts = async () => {
    const page = pageValue ? `?page=${pageValue}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchProductsAdmin({
        page,
        search,
      })
    );
  };

  React.useEffect(() => {
    getProducts();
  }, [pageValue, searchValue]);

  return (
    <div className="admin-products">
      <div className="admin-products__header">
        <h3>Товары</h3>
        <Link to="/admin/products/add-product" className="admin-button">
          <span>+</span>
          <div>Добавить товар</div>
        </Link>
      </div>
      {location.pathname === "/admin/products" && (
        <Search placeholder={"Поиск товара..."} />
      )}
      <ProductList />
      {totalPages > 1 && <Pagination />}
    </div>
  );
};

export default Products;
