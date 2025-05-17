import React from "react";
import { Input } from "../../shared/ui/Input/Input";
import { Button } from "../../shared/ui/Button/Button";
import styles from "./Registration.module.css";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../../feature/RegistrationForm/ui/RegistrationForm";

function Registration() {
  return (
    <div className={styles.container}>
      <div className={styles.registrationBox}>
        <h1 className={styles.title}>Регистрация</h1>
        <RegistrationForm />
        <p className={styles.linkText}>
          Уже есть аккаунт?{" "}
          <Link to='/login' className={styles.link}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;
