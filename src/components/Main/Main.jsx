import React from "react";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.mainTitle}>
        <h1 className={styles.title}>Зарабатывайте больше</h1>
        <span>с WELBEX</span>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>
          Вместе с <span>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:
        </h2>
        <div className={styles.contentItems}>
          <div className={styles.item}>
            <h3>ВИДЖЕТЫ</h3>
            <p>30 готовых решений</p>
          </div>
          <div className={styles.item}>
            <h3>DASHBOARD</h3>
            <p>с показателями вышего бизнеса</p>
          </div>
          <div className={styles.item}>
            <h3>SKYPE АУДИТ</h3>
            <p>отдела продаж и CRM системы</p>
          </div>
          <div className={styles.item}>
            <h3>35 ДНЕЙ</h3>
            <p>использования CRM</p>
          </div>
        </div>
        <button type="button">Получить консультацию</button>
      </div>
    </div>
  );
};

export default Main;





