import React, { useState } from "react";
import s from "./RegistrationForm.module.css";
import { Input } from "../../../shared/ui/Input/Input";
import { Button } from "../../../shared/ui/Button/Button";
import { Modal } from "../../../shared/ui/Modal/Modal";
import { useSignUp } from "../lib/useSignUp";
import { useNavigate } from "react-router-dom";

export function RegistrationForm() {
  const navigate = useNavigate()
  const { formData, handleInputChange, handleSubmit, isLoading, error } = useSignUp();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const onSubmit = async (e) => {
    try {
      const result = await handleSubmit(e);
      console.log('Регистрация успешна:', result);
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  };

  const handleOpenLogin = () => {
    navigate("/login").then(()=> setIsSuccessModalOpen(false) )
  };

  return (
    <>
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

      <Modal 
        isOpen={isSuccessModalOpen} 
        onClose={() => setIsSuccessModalOpen(false)}
        title="Регистрация успешна"
      >
        <p>Вы успешно зарегистрировались!</p>
        <Button 
          variant='primary' 
          fullWidth 
          onClick={handleOpenLogin}
        >
          Войти в аккаунт
        </Button>
      </Modal>
    </>
  );
}
