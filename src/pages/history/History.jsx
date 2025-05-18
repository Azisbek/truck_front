import React from "react";
import s from "./History.module.css";
import { useGetHistoryQuery } from "./api";
import { useSelector } from "react-redux";
import { HistoryItem } from "./ui/HistoryItem";

function History() {
  const userId = useSelector((state) => state.accountSlice.user?.id);
  const { data } = useGetHistoryQuery({ userId: userId });

  if (!data) {
    return (
      <div className={s.container}>
        <h1 className={s.title}>История расчетов</h1>
        <div className={s.content}>
          <p>Загрузка данных...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={s.container}>
      <h1 className={s.title}>История расчетов</h1>
      <div className={s.content}>
        {data.map((history) => (
          <HistoryItem key={history.id} history={history} />
        ))}
      </div>
    </div>
  );
}

export default History;
