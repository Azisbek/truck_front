import s from "./UserList.module.css";
import { useGetUsersQuery } from "./api";
import { useNavigate } from "react-router-dom";

function UserList() {
  const { data: users, isLoading } = useGetUsersQuery();
  const navigate = useNavigate();

  const handleOpenHistory = (userId) => {
    navigate(`/users-history?userId=${userId}`);
  };

  if (isLoading) {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Список пользователей</h1>
        <div className={s.content}>
          <div className={s.loading}>Загрузка данных...</div>
        </div>
      </div>
    );
  }

  if (!users?.length) {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Список пользователей</h1>
        <div className={s.content}>
          <div className={s.empty}>Пользователи не найдены</div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.container}>
      <h1 className={s.title}>Список пользователей</h1>
      <div className={s.content}>
        <table className={s.table}>
          <thead className={s.tableHeader}>
            <tr>
              <th>Имя пользователя</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className={s.tableRow}
                onClick={() => handleOpenHistory(user._id)}
              >
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
