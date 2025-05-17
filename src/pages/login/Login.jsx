import React from "react";
import { Input } from "../../shared/ui/Input/Input";
import { Button } from "../../shared/ui/Button/Button";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Вход в систему</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <Input 
              placeholder='Логин' 
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
            Войти
          </Button>
        </form>
        <p className={styles.linkText}>
          Нет аккаунта? <Link to="/registration" className={styles.link}>Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
