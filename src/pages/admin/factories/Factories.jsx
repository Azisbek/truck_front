import React from "react";
import styles from "./Factories.module.css";
import { useSelector } from 'react-redux';
import { Button } from '../../../shared/ui/Button/Button';

function Factories() {
  const userRole = useSelector((state) => state.accountSlice.user?.role);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Управление фабриками</h1>
      <div className={styles.content}>
        {userRole === 'admin' && (
          <Button variant="primary" onClick={() => {  }}>
            Добавить новую фабрику
          </Button>
        )}
      </div>
    </div>
  );
}

export default Factories; 