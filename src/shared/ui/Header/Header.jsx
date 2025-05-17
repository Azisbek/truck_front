import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.css';
import { Button } from '../Button/Button';
import TokenService from '../../lib/TokenService';

export const Header = () => {
  const location = useLocation();
  const isAuthenticated = !!TokenService.getToken();

  const isActive = (path) => {
    return location.pathname === path ? s.active : '';
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
              <Link to="/calculator" className={`${s.link} ${isActive('/calculator')}`}>
                Калькулятор
              </Link>
              <Link to="/history" className={`${s.link} ${isActive('/history')}`}>
                История
              </Link>
              <Link to="/about" className={`${s.link} ${isActive('/about')}`}>
                О нас
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className={`${s.link} ${isActive('/login')}`}>
                Войти
              </Link>
              <Link to="/registration" className={s.link}>
                <Button variant="primary">
                  Регистрация
                </Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}; 