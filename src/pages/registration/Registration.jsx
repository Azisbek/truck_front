import React from "react";
import { Input } from "../../shared/ui/Input/Input";
import { Button } from "../../shared/ui/Button/Button";
import styles from "./Registration.module.css";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className={styles.container}>
      <div className={styles.registrationBox}>
        <h1 className={styles.title}>Регистрация</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <Input 
              placeholder='Имя пользователя' 
            />
          </div>
          <div className={styles.inputGroup}>
            <Input 
              placeholder='Email' 
              type="email"
            />
          </div>
          <div className={styles.inputGroup}>
            <Input 
              placeholder='Пароль' 
              type="password"
            />
          </div>
          <Button 
            type="submit" 
            variant="primary"
            fullWidth
          >
            Зарегистрироваться
          </Button>
        </form>
        <p className={styles.linkText}>
          Уже есть аккаунт? <Link to="/login" className={styles.link}>Войти</Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;
