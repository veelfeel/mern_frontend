import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { useAppDispatch } from '../redux/store';
import { addCartItem } from '../redux/cart/slice';

import axios from '../axios';

import { CardRating, AddFavouritesButton, Loader } from '../components';
import { CartItem } from '../redux/cart/types';

const Product: React.FC = () => {
  const [product, setProduct] = React.useState<{
    _id: string;
    title: string;
    imageUrl: string;
    brand: string;
    country: string;
    manufacturer: string;
    area: number;
    power: number;
    sizeInner: string;
    sizeOuter: string;
    weight: string;
    compressor: string;
    noiseInner: string;
    noiseOuter: string;
    diameterPipes: string;
    energyClass: string;
    refrigerant: string;
    invertor: string;
    led: string;
    wifi: string;
    warranty: string;
    price: number;
    countInStock: number;
    description: string;
    modes: string;
  }>();

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        alert('Ошибка при получении товара');
        navigate('/');
      }
    }

    fetchProduct();
  }, []);

  if (!product) {
    return <Loader />;
  }

  const onClickAdd = () => {
    const item: CartItem = {
      _id: product._id,
      title: product.title,
      price: product.price,
      count: 0,
      imageUrl: product.imageUrl,
    };
    dispatch(addCartItem(item));
  };

  return (
    <div className="product-screen">
      <div className="container">
        <div className="product-screen__content">
          <Link to="/" className="go-to-back-link">
            <div className="arrow">
              <span></span>
              <span></span>
            </div>
            <span>Вернуться назад</span>
          </Link>
          <img src={product.imageUrl} alt={product.title} className="product-screen__img" />
          <h3 className="product-screen__title">{product.title}</h3>
          <CardRating />
          <div className="product-screen__text">
            <div className="product-screen__text-title">Характеристики</div>
            <ul className="product-screen__parameters">
              <li>
                <p>Производитель</p>
                <strong>{product.brand}</strong>
              </li>
              <li>
                <p>Страна производитель</p>
                <strong>{product.country}</strong>
              </li>
              <li>
                <p>Завод изготовитель</p>
                <strong>{product.manufacturer}</strong>
              </li>
              <li>
                <p>Максимальная площадь помещения</p>
                <strong>{product.area}</strong>
              </li>
              <li>
                <p>Холодопроизводительность</p>
                <strong>{product.power}</strong>
              </li>
              <li>
                <p>Габариты внутр.блока ШхВхГ, мм</p>
                <strong>{product.sizeInner}</strong>
              </li>
              <li>
                <p>Габариты внеш.блока ШхВхГ, мм</p>
                <strong>{product.sizeOuter}</strong>
              </li>
              <li>
                <p>Масса внутр/внеш, кг</p>
                <strong>{product.weight}</strong>
              </li>
              <li>
                <p>Компрессор</p>
                <strong>{product.compressor}</strong>
              </li>
              <li>
                <p>Уровень шума вн.блока, Дб</p>
                <strong>{product.noiseInner}</strong>
              </li>
              <li>
                <p>Уровень шума внеш.блока, Дб</p>
                <strong>{product.noiseOuter}</strong>
              </li>
              <li>
                <p>Диаметр труб, мм (дюймы)</p>
                <strong>{product.diameterPipes}</strong>
              </li>
              <li>
                <p>Класс энергоэффективности</p>
                <strong>{product.energyClass}</strong>
              </li>
              <li>
                <p>Хладагент</p>
                <strong>{product.refrigerant}</strong>
              </li>
              <li>
                <p>Инвертор</p>
                <strong>{product.invertor}</strong>
              </li>
              <li>
                <p>LED дисплей</p>
                <strong>{product.led}</strong>
              </li>
              <li>
                <p>Wi-Fi управление (опция)</p>
                <strong>{product.wifi}</strong>
              </li>
              <li>
                <p>Срок гарантии, мес.</p>
                <strong>{product.warranty}</strong>
              </li>
            </ul>
          </div>
          <div className="product-screen__right-content">
            <div className="product-screen__price">
              <span className="product-screen__price__number">{product.price}</span>
              <span className="product-screen__price__symbol"> ₽</span>
            </div>
            <AddFavouritesButton />
            <button onClick={onClickAdd} className="product-screen-button button-primary">
              Купить
            </button>
            <span className="product-block__count-in-stock">
              В наличии: {product.countInStock} шт.
            </span>
            <span className="product-block__delivery"> Бесплатная доставка</span>
          </div>
        </div>
        <div className="product-screen__text-title product-screen__text-title--padding-top">
          Описание
        </div>
        <p className="product-screen__description">{product.description}</p>
        <p className="product-screen__description">Режимы: {product.modes}.</p>
      </div>
    </div>
  );
};

export default Product;
