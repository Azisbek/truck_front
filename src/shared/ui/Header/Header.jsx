import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./Header.module.css";
import { Button } from "../Button/Button";
import TokenService from "../../lib/TokenService";
import { useSelector } from "react-redux";

export const Header = () => {
  const location = useLocation();
  const isAuthenticated = !!TokenService.getToken();
  const userRole = useSelector((state) => state.accountSlice.user?.role);
  console.log(userRole);
  const isActive = (path) => {
    return location.pathname === path ? s.active : "";
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/" className={s.logo}>
          TransportCalc
        </Link>
        <nav className={s.nav}>
          {isAuthenticated ? (
            <>
              <Link
                to="/calculator"
                className={`${s.link} ${isActive("/calculator")}`}
              >
                Калькулятор
              </Link>
              <Link
                to="/history"
                className={`${s.link} ${isActive("/history")}`}
              >
                История расчетов
              </Link>
              {userRole === "admin" && (
                <>
                  <Link
                    to="/admin/factories"
                    className={`${s.link} ${isActive("/admin/factories")}`}
                  >
                    Фабрики
                  </Link>
                  <Link
                    to="/admin/plants"
                    className={`${s.link} ${isActive("/admin/plants")}`}
                  >
                    Заводы
                  </Link>
                  <Link
                    to="/admin/userList"
                    className={`${s.link} ${isActive("/admin/userList")}`}
                  >
                    Список пользователей
                  </Link>
                </>
              )}
              <Link to="/about" className={`${s.link} ${isActive("/about")}`}>
                О системе
              </Link>
            </>
          ) : (
            <>
              <Link to="/about" className={`${s.link} ${isActive("/about")}`}>
                О системе
              </Link>
              <Link to="/login" className={`${s.link} ${isActive("/login")}`}>
                Войти
              </Link>
              <Link to="/registration" className={s.link}>
                <Button variant="primary">Регистрация</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
