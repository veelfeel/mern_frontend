import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAppSelector } from '../../redux/store';
import { selectIsAuth } from '../../redux/auth/selectors';

import { Search } from '../Search';
import { CartLink } from './CartLink';
import { LogoutButton } from './LogoutButton';

export const Header: React.FC = () => {
  const location = useLocation();
  const isAuth = useAppSelector(selectIsAuth);
  const isAdmin = useAppSelector((state) => state.auth.data?.isAdmin);
  const name = useAppSelector((state) => state.auth.data?.fullName);

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
                <img src="../images/icons/phone.svg" alt="phone" />
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
            {location.pathname === '/' && <Search placeholder={'Поиск по сайту...'} />}
            <div className="header__right-links">
              {location.pathname.startsWith('/profile') ||
              location.pathname.startsWith('/admin') ? (
                ''
              ) : (
                <Link to="/favourites">
                  <svg className="header__favourites-image" viewBox="0 0 44 39">
                    <path d="M5.09726 5.01265C9.22694 0.995783 15.9225 0.995783 20.0522 5.01265L22 6.90728L23.9478 5.01265C28.0775 0.995783 34.7731 0.995783 38.9027 5.01265C43.0324 9.02952 43.0324 15.5421 38.9027 19.559L22 36L5.09726 19.559C0.96758 15.5421 0.96758 9.02952 5.09726 5.01265Z" />
                  </svg>
                  <div className="header__favourites-image-counter">
                    <span className="header__favourites-image-counter-text"></span>
                  </div>
                  <span>Избранное</span>
                </Link>
              )}
              <Link to={isAuth && !isAdmin ? '/profile' : isAuth && isAdmin ? '/admin' : '/signin'}>
                <svg className="header__signin-image" viewBox="0 0 66 63">
                  <circle cx="33" cy="20" r="19" />
                  <path d="M1 62V62C14.778 36.5886 51.574 36.4008 65 62V62" />
                </svg>
                <span>{isAuth ? name : 'Войти'}</span>
              </Link>
              {location.pathname.startsWith('/profile') ||
              location.pathname.startsWith('/admin') ? (
                <LogoutButton />
              ) : (
                ''
              )}
              {location.pathname.startsWith('/profile') ||
                (location.pathname.startsWith('/admin') ? '' : <CartLink />)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
