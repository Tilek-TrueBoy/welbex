import React from "react";

// icons
import telegram from "../../assets/telegram.svg";
import viber from "../../assets/viber.svg";
import whatsapp from "../../assets/whatsapp.svg";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="aboutCompany">
        <h2 className={styles.title}>О компании</h2>
        <ul className={styles.companyList}>
          <li className={styles.companyItem}>Партнёрская программа</li>
          <li className={styles.companyItem}>Вакансии</li>
        </ul>
      </div>
      <div className={styles.menu}>
        <h2 className={styles.title}>Меню</h2>
        <div className={styles.menuListWrap}>
          <ul className={styles.menuList}>
            <li className={styles.meniItem}>
              <a href="#">Расчёт стоимости</a>
            </li>
            <li className={styles.meniItem}>
              <a href="#">Услуги</a>
            </li>
            <li className={styles.meniItem}>
              <a href="#">Виджеты</a>
            </li>
            <li className={styles.meniItem}>
              <a href="#">Интеграции</a>
            </li>
            <li className={styles.meniItem}>
              <a href="#">Наши клиенты</a>
            </li>
          </ul>
          <ul className={styles.menuList}>
            <li className={styles.meniItem}>
              <a href="#">Кейсы</a>
            </li>
            <li className={styles.meniItem}>
              <a href="#">Благодарственные письма</a>
            </li>
            <li className={styles.meniItem}>
              <a href="#">Сертификаты</a>
            </li>
            <li className={styles.meniItem}>
              <a href="#">Блог на Youtube</a>
            </li>
            <li className={styles.meniItem}>
              <a href="#">Вопрос / Ответ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.contactsWrapper}>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.contacts}>
          <a href="#">+7 555 555-55-55</a>
          <div className={styles.contactIcons}>
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
          <p className={styles.address}>Москва, Путевой проезд 3с1, к 902</p>
          <div className={styles.welbex}>
            <p>©WELBEX 2022. Все права защищены.</p>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;




