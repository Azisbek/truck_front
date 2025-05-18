import React from "react";
import s from "./UsersHistory.module.css";
import { useGetHistoryQuery } from "../../history/api";
import { useSearchParams } from "react-router-dom";
import { HistoryItem } from "../../history/ui/HistoryItem";

function UsersHistory() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const { data, isLoading, error } = useGetHistoryQuery(
    { userId },
    { skip: !userId }
  );

  if (isLoading) {
    return (
      <div className={s.container}>
        <h1 className={s.title}>История расчетов пользователя</h1>
        <div className={s.content}>
          <div className={s.loading}>Загрузка данных...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.container}>
        <h1 className={s.title}>История расчетов пользователя</h1>
        <div className={s.content}>
          <div className={s.error}>
            Ошибка при загрузке данных: {error.message}
          </div>
        </div>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className={s.container}>
        <h1 className={s.title}>История расчетов пользователя</h1>
        <div className={s.content}>
          <div className={s.empty}>История расчетов не найдена</div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.container}>
      <h1 className={s.title}>История расчетов пользователя</h1>
      <div className={s.content}>
        {data.map((history) => (
          <HistoryItem key={history.id} history={history} />
        ))}
      </div>
    </div>
  );
}

export default UsersHistory;
