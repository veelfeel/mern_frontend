import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../redux/store';
import { selectCart } from '../redux/cart/selectors';
import { selectIsAuth } from '../redux/auth/selectors';

import { CartItem } from '../redux/cart/types';

export const Header: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isAdmin = useAppSelector((state) => state.auth.data?.isAdmin);
  const name = useAppSelector((state) => state.auth.data?.fullName);

  const { items } = useAppSelector(selectCart);
  const totalCount = items.reduce((sum: number, item: CartItem) => sum + item.count, 0);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }

    isMounted.current = true;
  }, [items]);

  return (
    <header>
      <div className="header__top">
        <div className="container">
          <div className="header__top-group">
            <div className="hamb">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div className="location">
              <svg className="location-image" viewBox="0 0 24 24">
                <path d="M12 20.9L16.95 15.95C17.9289 14.971 18.5955 13.7237 18.8656 12.3659C19.1356 11.008 18.9969 9.6006 18.4671 8.32155C17.9373 7.04251 17.04 5.9493 15.8889 5.18017C14.7378 4.41103 13.3844 4.0005 12 4.0005C10.6156 4.0005 9.26222 4.41103 8.11109 5.18017C6.95996 5.9493 6.06275 7.04251 5.53292 8.32155C5.00308 9.6006 4.86442 11.008 5.13445 12.3659C5.40449 13.7237 6.07111 14.971 7.05 15.95L12 20.9ZM12 23.728L5.636 17.364C4.37734 16.1053 3.52019 14.5017 3.17293 12.7558C2.82567 11.01 3.00391 9.20043 3.6851 7.5559C4.36629 5.91137 5.51984 4.50577 6.99988 3.51684C8.47992 2.52791 10.22 2.00008 12 2.00008C13.78 2.00008 15.5201 2.52791 17.0001 3.51684C18.4802 4.50577 19.6337 5.91137 20.3149 7.5559C20.9961 9.20043 21.1743 11.01 20.8271 12.7558C20.4798 14.5017 19.6227 16.1053 18.364 17.364L12 23.728ZM12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58578C13.0391 9.21071 12.5304 9 12 9C11.4696 9 10.9609 9.21071 10.5858 9.58578C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13ZM12 15C10.9391 15 9.92172 14.5786 9.17158 13.8284C8.42143 13.0783 8 12.0609 8 11C8 9.93913 8.42143 8.92172 9.17158 8.17157C9.92172 7.42143 10.9391 7 12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15Z" />
              </svg>
              <p className="location-text">Сочи</p>
            </div>
            <div className="menu">
              <ul className="nav">
                <li>
                  <a href="#cond-scroll">Заказать доставку</a>
                </li>
                <li>
                  <a href="#uslugi-scroll">Заказать установку</a>
                </li>
                <li>
                  <a href="#o-nas-scroll">О нас</a>
                </li>
              </ul>
            </div>
            <div className="header-info">
              <a href="tel:+79881482838">8 (988) 148-28-38</a>
              <button className="open-popup" type="button">
                Перезвоните мне
              </button>
            </div>
            <div className="header-info-mobile">
              <a href="tel:+79881482838">
                <img src="images/icons/phone.svg" alt="phone" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-buttons">
            <div className="logo">
              <Link to="/">
                <div className="logo-texts">
                  <div className="logo-text">Магазин кондиционеров</div>
                  <div className="logo-text2">Наш климат - ваш комфорт</div>
                </div>
              </Link>
            </div>
            <div className="header__search-group">
              <input className="header__input-search" type="search" placeholder="Поиск по сайту" />
              <span className="header__search-cansel">
                <div className="header__search-cansel-bar"></div>
                <div className="header__search-cansel-bar"></div>
              </span>
              <button className="header__search-btn">
                <svg className="header__search-image" viewBox="0 0 17 17">
                  <path d="M10.5513 10.6898C10.6445 10.5972 10.755 10.5238 10.8766 10.4739C10.9982 10.424 11.1284 10.3986 11.2598 10.399C11.3912 10.3995 11.5212 10.4259 11.6425 10.4766C11.7637 10.5274 11.8737 10.6015 11.9662 10.6948L15.8026 14.5584C15.9896 14.7466 16.0941 15.0014 16.0933 15.2666C16.0924 15.5319 15.9863 15.786 15.7981 15.9729C15.6099 16.1599 15.3552 16.2645 15.0899 16.2636C14.8246 16.2628 14.5706 16.1566 14.3836 15.9684L10.5472 12.1048C10.4546 12.0116 10.3812 11.9011 10.3313 11.7795C10.2814 11.6579 10.256 11.5277 10.2565 11.3963C10.2569 11.2649 10.2833 11.1348 10.334 11.0136C10.3848 10.8924 10.458 10.7824 10.5513 10.6898Z" />
                  <path d="M6.60371 12.2339C7.32597 12.2364 8.04167 12.0967 8.70994 11.8227C9.3782 11.5486 9.98595 11.1457 10.4985 10.6367C11.011 10.1278 11.4183 9.52296 11.697 8.85665C11.9758 8.19035 12.1206 7.47566 12.1231 6.75339C12.1257 6.03112 11.986 5.31543 11.7119 4.64716C11.4379 3.9789 11.0349 3.37115 10.526 2.85862C10.0171 2.3461 9.41223 1.93882 8.74592 1.66006C8.07961 1.3813 7.36492 1.23651 6.64266 1.23395C5.18398 1.22878 3.78299 1.80329 2.74789 2.83108C1.7128 3.85887 1.12838 5.25576 1.12322 6.71444C1.11805 8.17312 1.69256 9.57411 2.72035 10.6092C3.74814 11.6443 5.14502 12.2287 6.60371 12.2339ZM13.1231 6.75693C13.117 8.48083 12.4264 10.1317 11.2031 11.3464C9.97978 12.561 8.32406 13.24 6.60017 13.2339C4.87627 13.2278 3.2254 12.5371 2.01074 11.3138C0.796079 10.0905 0.117118 8.43479 0.123223 6.7109C0.129328 4.987 0.819997 3.33614 2.04329 2.12147C3.26659 0.906811 4.9223 0.22785 6.6462 0.233955C8.3701 0.240059 10.021 0.930729 11.2356 2.15402C12.4503 3.37732 13.1292 5.03303 13.1231 6.75693Z" />
                </svg>
              </button>
              <ul className="header__search-variants none"></ul>
            </div>
            <div className="header__right-links">
              <Link to="/favourites">
                <svg className="header__favourites-image" viewBox="0 0 44 39">
                  <path d="M5.09726 5.01265C9.22694 0.995783 15.9225 0.995783 20.0522 5.01265L22 6.90728L23.9478 5.01265C28.0775 0.995783 34.7731 0.995783 38.9027 5.01265C43.0324 9.02952 43.0324 15.5421 38.9027 19.559L22 36L5.09726 19.559C0.96758 15.5421 0.96758 9.02952 5.09726 5.01265Z" />
                </svg>
                <div className="header__favourites-image-counter">
                  <span className="header__favourites-image-counter-text"></span>
                </div>
                <span>Избранное</span>
              </Link>
              {
                <Link
                  to={isAuth && !isAdmin ? '/profile' : isAuth && isAdmin ? '/admin' : '/signin'}>
                  <svg className="header__signin-image" viewBox="0 0 66 63">
                    <circle cx="33" cy="20" r="19" />
                    <path d="M1 62V62C14.778 36.5886 51.574 36.4008 65 62V62" />
                  </svg>
                  <span>{isAuth ? name : 'Войти'}</span>
                </Link>
              }

              <Link to="/cart">
                <svg className="header__cart-image" viewBox="0 0 24 25">
                  <path d="M9 22.5C9.55228 22.5 10 22.0523 10 21.5C10 20.9477 9.55228 20.5 9 20.5C8.44772 20.5 8 20.9477 8 21.5C8 22.0523 8.44772 22.5 9 22.5Z" />
                  <path d="M20 22.5C20.5523 22.5 21 22.0523 21 21.5C21 20.9477 20.5523 20.5 20 20.5C19.4477 20.5 19 20.9477 19 21.5C19 22.0523 19.4477 22.5 20 22.5Z" />
                  <path d="M1 1.5H5L7.68 14.89C7.77144 15.3504 8.02191 15.764 8.38755 16.0583C8.75318 16.3526 9.2107 16.509 9.68 16.5H19.4C19.8693 16.509 20.3268 16.3526 20.6925 16.0583C21.0581 15.764 21.3086 15.3504 21.4 14.89L23 6.5H6" />
                </svg>
                {totalCount !== 0 && <span>{totalCount}</span>}
                <span>Корзина</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
