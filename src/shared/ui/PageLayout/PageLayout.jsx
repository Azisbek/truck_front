import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import s from './PageLayout.module.css';

export const PageLayout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};
