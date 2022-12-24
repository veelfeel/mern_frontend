import React from "react";

import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectProducts } from "../redux/product/selectors";
import { selectFilters } from "../redux/filters/selectors";
import { fetchProducts } from "../redux/product/asyncThunk";

import { Product } from "../redux/product/types";

import {
  ContactOfPromo,
  CarouselOfPromo,
  TimerOfPromo,
  Pagination,
  Sort,
  Loader,
  ProductBlock,
  Sidebar,
} from "../components";

const Home: React.FC = () => {
  const { products, status, total, limit } = useAppSelector(selectProducts);
  const totalPages = Math.ceil(total / limit);

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
    <>
      <div className="promo">
        <div className="container">
          <div className="promo-blocks">
            <ContactOfPromo />
            <CarouselOfPromo />
            <TimerOfPromo />
          </div>
        </div>
      </div>
      <div className="container padding-bottom">
        {status === "loading" ? (
          <div className="page__title skeleton"></div>
        ) : (
          <div className="page__title">
            <h1 className="title">Кондиционеры (сплит-системы)</h1>
            <span> {total} товаров</span>
          </div>
        )}
        <div className="vitrina">
          <Sidebar />
          <div className="right-bar">
            <Sort />
            <div className="products-container">
              {status === "error" ? (
                <div>
                  <h2>Произошла ошибка 😕</h2>
                  <p>
                    К сожалению, не удалось загрузить товары. Попробуйте
                    повторить попытку позже.
                  </p>
                </div>
              ) : status === "loading" ? (
                <Loader className={"product-block"} />
              ) : total === 0 ? (
                <div className="product-not-found">
                  <h2>Товары не найдены 😕</h2>
                  <p>Попробуйте изменить параметры фильрации или поиска.</p>
                </div>
              ) : (
                products.map((obj: Product) => (
                  <ProductBlock key={obj._id} {...obj} />
                ))
              )}
            </div>
            {totalPages > 1 && <Pagination />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
