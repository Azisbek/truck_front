import React from "react";
import styles from "./Plants.module.css";
import { useSelector } from 'react-redux';
import { Button } from '../../../shared/ui/Button/Button';

function Plants() {
  const userRole = useSelector((state) => state.accountSlice.user?.role);

  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Управление заводами</h1>
      <div className={styles.content}>
        {userRole === 'admin' && (
          <Button variant="primary" onClick={() => {  }}>
            Добавить новый завод
          </Button>
        )}
      </div>
    </div>
  );
}

export default Plants; 