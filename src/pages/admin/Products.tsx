import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "../../components/Search";
import { ProductList } from "../../components/admin/ProductList";
import { Pagination } from "../../components/Pagination";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectProducts } from "../../redux/product/selectors";
import { fetchProducts } from "../../redux/product/asyncThunk";
import { selectFilters } from "../../redux/filters/selectors";

const Products: React.FC = () => {
  const { total, limit } = useAppSelector(selectProducts);
  const totalPages = Math.ceil(total / limit);

  const location = useLocation();

  const dispatch = useAppDispatch();
  const {
    searchValue,
    inverterFilter,
    minPriceFilter,
    maxPriceFilter,
    areaFilter,
    brandFilter,
    countryFilter,
    sort,
    page,
  } = useAppSelector(selectFilters);

  const getProducts = async () => {
    const search = searchValue ? `&search=${searchValue}` : "";
    const inverter =
      inverterFilter.length > 0 ? `&inverter=${inverterFilter.toString()}` : "";
    const minPrice = minPriceFilter ? `&minPrice=${minPriceFilter}` : "";
    const maxPrice = maxPriceFilter ? `&maxPrice=${maxPriceFilter}` : "";
    const area = areaFilter.length > 0 ? `&area=${areaFilter.toString()}` : "";
    const brand =
      brandFilter.length > 0 ? `&brand=${brandFilter.toString()}` : "";
    const country = `&country=${countryFilter}`;
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "-1" : "1";

    dispatch(
      fetchProducts({
        page,
        search,
        inverter,
        minPrice,
        maxPrice,
        area,
        brand,
        country,
        sortBy,
        order,
      })
    );
  };

  React.useEffect(() => {
    getProducts();
  }, [
    page,
    searchValue,
    inverterFilter,
    minPriceFilter,
    maxPriceFilter,
    areaFilter,
    brandFilter,
    countryFilter,
    sort.sortProperty,
  ]);

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
