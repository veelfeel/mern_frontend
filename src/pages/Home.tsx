import React from 'react';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { selectProducts } from '../redux/product/selectors';
import { fetchProducts } from '../redux/product/slice';

import {
  ContactOfPromo,
  CarouselOfPromo,
  TimerOfPromo,
  MoreButton,
  PanelOfSort,
  Loader,
  ProductBlock,
  Sidebar,
} from '../components';
import { Product } from '../redux/product/types';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector(selectProducts);

  const productBlocks = products.map((obj: Product) => <ProductBlock key={obj._id} {...obj} />);

  // React.useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

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
        <div className="page__title">
          <h1 className="title">Кондиционеры (сплит-системы)</h1>
          <span> {products.length} товаров</span>
        </div>
        <div className="vitrina">
          <Sidebar />
          <div className="right-bar">
            <PanelOfSort />
            <div className="products-container">
              {status === 'error' ? (
                <div>
                  <h2>Произошла ошибка 😕</h2>
                  <p>
                    К сожалению, не удалось загрузить товары. Попробуйте повторить попытку позже.
                  </p>
                </div>
              ) : status === 'loading' ? (
                <Loader />
              ) : (
                productBlocks
              )}
            </div>
            <MoreButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
