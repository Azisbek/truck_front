import React from "react";
import { useParams } from "react-router-dom";
import s from "./HistoryDetails.module.css";
import { useGetHistoryByIdQuery } from "./api";
import { formatDate } from "../../shared/lib/toLocaleDateString";
import { useSelector } from "react-redux";

function HistoryDetails() {
  const { id } = useParams();
  const userId = useSelector((state) => state.accountSlice.user?.id);
  const { data: history, isLoading } = useGetHistoryByIdQuery({ id, userId });

  if (isLoading) {
    return (
      <div className={s.container}>
        <div className={s.loading}>Загрузка данных...</div>
      </div>
    );
  }

  if (!history) {
    return (
      <div className={s.container}>
        <div className={s.empty}>Расчет не найден</div>
      </div>
    );
  }

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1 className={s.title}>{history.name}</h1>
        <div className={s.subtitle}>
          Создан: {formatDate(history.createdAt)}
        </div>
      </div>

      <div className={s.summary}>
        <div className={s.summaryItem}>
          <div className={s.summaryLabel}>Метод</div>
          <div className={s.summaryValue}>{history.method}</div>
        </div>
        <div className={s.summaryItem}>
          <div className={s.summaryLabel}>Поставщики</div>
          <div className={s.summaryValue}>{history.suppliers.length}</div>
        </div>
        <div className={s.summaryItem}>
          <div className={s.summaryLabel}>Потребители</div>
          <div className={s.summaryValue}>{history.consumers.length}</div>
        </div>
        <div className={s.summaryItem}>
          <div className={s.summaryLabel}>Общая стоимость</div>
          <div className={s.summaryValue}>
            {history.totalCost.toLocaleString("ru-RU")} KGS
          </div>
        </div>
      </div>

      <div className={s.content}>
        <div className={s.tableContainer}>
          <table className={s.table}>
            <thead className={s.tableHeader}>
              <tr>
                <th>Поставщик</th>
                {history.consumers.map((consumer, index) => (
                  <th key={index}>Потребитель {index + 1}</th>
                ))}
                <th>Всего</th>
              </tr>
            </thead>
            <tbody>
              {history.allocation.map((row, rowIndex) => (
                <tr key={rowIndex} className={s.tableRow}>
                  <td>Поставщик {rowIndex + 1}</td>
                  {row.map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                  <td>{row.reduce((sum, value) => sum + value, 0)}</td>
                </tr>
              ))}
              <tr className={s.tableRow}>
                <td>Всего</td>
                {history.consumers.map((_, colIndex) => (
                  <td key={colIndex}>
                    {history.allocation.reduce(
                      (sum, row) => sum + row[colIndex],
                      0
                    )}
                  </td>
                ))}
                <td>{history.totalCost}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HistoryDetails;
