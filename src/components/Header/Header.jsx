import React from "react";

// icons
import iconLogo from "../../assets/logo_welbex.png";
import whatsapp from "../../assets/whatsapp.svg";
import viber from "../../assets/viber.svg";
import telegram from "../../assets/telegram.svg";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#">
          <img src={iconLogo} alt="" />
          <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </a>
      </div>

      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <a href="#">Услуги</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">Виджеты</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">Интеграции</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">Кейсы</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">Сертификаты</a>
        </li>
      </ul>

      <div className={styles.contacts}>
        <a href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
        <div className={styles.messengers}>
          <a href="#">
            <img src={telegram} alt="" />
          </a>
          <a href="#">
            <img src={viber} alt="" />
          </a>
          <a href="#">
            <img src={whatsapp} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

