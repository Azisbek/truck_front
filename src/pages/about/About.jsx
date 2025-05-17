import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Logistics Optimizer</h1>
        <p className={styles.description}>
          Это веб-сервис, который за считанные секунды рассчитывает самый дешёвый план доставки сырья со складов на фабрики. 
          Он заменяет громоздкие Excel-таблицы и помогает компаниям экономить на транспорте без лишних усилий.
        </p>
      </section>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Ключевые возможности</h2>
        <ul className={styles.featureList}>
          <li>Автоматический расчёт классической «транспортной задачи»</li>
          <li>Удобный калькулятор: вводите запасы складов, потребности фабрик и тарифы → нажимаете «Посчитать»</li>
          <li>Сохранение и сравнение вариантов расчёта, экспорт отчёта в Excel или PDF</li>
          <li>Разграничение ролей: Пользователь (работает с расчётами) и Администратор (ведёт справочники и управляет доступом)</li>
          <li>Журнал действий, позволяющий отследить, кто и что изменял</li>
        </ul>
      </section>

      <section className={styles.audience}>
        <h2 className={styles.sectionTitle}>Кому полезна система</h2>
        <ul className={styles.audienceList}>
          <li>Логистам и экономистам производственных предприятий</li>
          <li>Отделам снабжения и планово-экономическим службам</li>
          <li>Консультантам по оптимизации издержек</li>
        </ul>
      </section>

      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>Как это работает — простыми словами</h2>
        <div className={styles.steps}>
          <p className={styles.stepDescription}>
            Пользователь вводит:
          </p>
          <ul className={styles.stepList}>
            <li>сколько тонн лежит на каждом складе</li>
            <li>сколько тонн нужно каждой фабрике</li>
            <li>сколько стоит перевезти тонну по каждому маршруту</li>
          </ul>
          <p className={styles.stepDescription}>
            После нажатия кнопки «Посчитать» сервер перебирает все варианты и показывает таблицу с оптимальным распределением грузов и итоговой суммой расходов.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About; 