import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-black">
        <div className="wrapper-footer">
          <div className="footer-top">
            <div className="logo">
              <div className="footer__logo-texts">
                <div className="logo-text-footer">Condi-K</div>
                <div className="logo-text2-footer">кондиционеры каждому</div>
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
              <span>Сочи, Адлер, Красная поляна</span>
              <span>
                <a href="tel:+79881482838">8 (988) 148-28-38</a>
              </span>
              <button className="open-popup info-button" type="button">
                Обратный звонок
              </button>
            </div>
          </div>
        </div>
        <div className="wrapper-footer">
          <div className="footer-bottom">
            <p>Condi-K кондиционеры каждому (с) 2022 Все права защищены.</p>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
