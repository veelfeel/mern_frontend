import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="logo">
            <div className="logo-texts">
              <div className="logo-text">Магазин кондиционеров</div>
              <div className="logo-text2">Наш климат - ваш комфорт</div>
            </div>
          </div>
          <div className="footer-top-item">
            <ul className="social">
              <li className="social-item">
                <a className="social-link social-tg" href="" target="_blank">
                  <img src="../images/telegram.svg" alt="telegram" />
                </a>
              </li>
              <li className="social-item">
                <a className="social-link social-wa" href="" target="_blank">
                  <img src="../images/whatsapp.svg" alt="whatsapp" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-info">
            <span>Кондиционеры с доставкой по всей России</span>
            <span>
              <a href="tel:+79881482838">8 (988) 148-28-38</a>
            </span>
            <button className="open-popup info-button" type="button">
              Обратный звонок
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Магазин кондиционеров (с) 2022 Все права защищены.</p>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};
