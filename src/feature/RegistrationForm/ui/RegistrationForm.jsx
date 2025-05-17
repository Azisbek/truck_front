import React from "react";
import s from "./RegistrationForm.module.css";
import { Input } from "../../../shared/ui/Input/Input";
import { Button } from "../../../shared/ui/Button/Button";
import { useSignUp } from "../lib/useSignUp";

export function RegistrationForm() {
  const { formData, handleInputChange, handleSubmit, isLoading, error } = useSignUp();

  const onSubmit = async (e) => {
    try {
      const result = await handleSubmit(e);
      console.log('Регистрация успешна:', result);
      // Здесь можно добавить редирект или показ сообщения об успехе
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      {error && <div className={s.error}>{error}</div>}
      <div className={s.inputGroup}>
        <Input
          placeholder='Имя пользователя'
          name='username'
          value={formData.username}
          onChange={handleInputChange}
          disabled={isLoading}
          required
        />
      </div>
      <div className={s.inputGroup}>
        <Input
          placeholder='Email'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          disabled={isLoading}
          required
        />
      </div>
      <div className={s.inputGroup}>
        <Input
          placeholder='Пароль'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleInputChange}
          disabled={isLoading}
          required
        />
      </div>
      <div className={s.inputGroup}>
        <Input
          placeholder='Подтвердите пароль'
          type='password'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleInputChange}
          disabled={isLoading}
          required
        />
      </div>
      <Button type='submit' variant='primary' fullWidth disabled={isLoading}>
        {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
      </Button>
    </form>
  );
}
