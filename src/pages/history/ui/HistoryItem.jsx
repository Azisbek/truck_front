import React from "react";
import s from "./HistoryItem.module.css";
import { formatDate } from "../../../shared/lib/toLocaleDateString";
import { useNavigate } from "react-router-dom";

export function HistoryItem({ history }) {
  const navigate = useNavigate();

  const handleCard = () => {
    navigate(history._id);
  };

  return (
    <div className={s.historyCard} onClick={handleCard}>
      <div className={s.cardHeader}>
        <h2 className={s.cardTitle}>{history.name}</h2>
        <span className={s.cardDate}>{formatDate(history.createdAt)}</span>
      </div>
      <div className={s.cardDetails}>
        <div className={s.detailItem}>
          <span className={s.detailLabel}>Метод</span>
          <span className={s.method}>{history.method}</span>
        </div>
        <div className={s.detailItem}>
          <span className={s.detailLabel}>Поставщики</span>
          <span className={s.detailValue}>
            {Array.isArray(history.suppliers) ? history.suppliers.length : 0}
          </span>
        </div>
        <div className={s.detailItem}>
          <span className={s.detailLabel}>Потребители</span>
          <span className={s.detailValue}>
            {Array.isArray(history.consumers) ? history.consumers.length : 0}
          </span>
        </div>
        <div className={s.detailItem}>
          <span className={s.detailLabel}>Общая стоимость</span>
          <span className={s.detailValue}>
            {typeof history.totalCost === "number"
              ? history.totalCost.toLocaleString("ru-RU") + " KGS"
              : "0 KGS"}
          </span>
        </div>
      </div>
    </div>
  );
}
