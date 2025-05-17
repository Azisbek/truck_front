import React, { useState } from "react";
import s from "./LoginForm.module.css";
import { Input } from "../../../shared/ui/Input/Input";
import { Button } from "../../../shared/ui/Button/Button";
import { Modal } from "../../../shared/ui/Modal/Modal";
import { useSignIn } from "../lib/useSignIn";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();
  const { formData, handleInputChange, handleSubmit, isLoading, error } = useSignIn();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const onSubmit = async (e) => {
    try {
      const result = await handleSubmit(e);
      console.log('Вход выполнен успешно:', result);
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error('Ошибка при входе:', error);
    }
  };

  const handleOpenRegistration = () => {
    navigate("/calculator").then(() => setIsSuccessModalOpen(false));
  };

  return (
    <>
      <form className={s.form} onSubmit={onSubmit}>
        {error && <div className={s.error}>{error}</div>}
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
        <Button type='submit' variant='primary' fullWidth disabled={isLoading}>
          {isLoading ? 'Вход...' : 'Войти'}
        </Button>
      </form>

      <Modal 
        isOpen={isSuccessModalOpen} 
        onClose={() => setIsSuccessModalOpen(false)}
        title="Вход выполнен"
      >
        <p>Вы успешно вошли в систему!</p>
        <Button 
          variant='primary' 
          fullWidth 
          onClick={handleOpenRegistration}
        >
          Вход
        </Button>
      </Modal>
    </>
  );
} 