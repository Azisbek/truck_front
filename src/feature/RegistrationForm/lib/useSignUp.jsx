import { useState } from "react";
import { useReistrationMutation } from "../api";

export const useSignUp = () => {
  const [registration, { isLoading: isRegistrationLoading }] = useReistrationMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Валидация
      if (!formData.username) {
        throw new Error("Введите имя пользователя");
      }
      if (!formData.email) {
        throw new Error("Введите email");
      }
      if (!formData.password) {
        throw new Error("Введите пароль");
      }
      if (!formData.confirmPassword) {
        throw new Error("Подтвердите пароль");
      }
      if (formData.password !== formData.confirmPassword) {
        throw new Error("Пароли не совпадают");
      }

      const submitData = {
        email: formData.email,
        password: formData.password,
        username: formData.username,
      };

      const result = await registration(submitData).unwrap();
      return result;
    } catch (err) {
      setError(err.message || "Произошла ошибка при регистрации");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    isLoading: isLoading || isRegistrationLoading,
    error,
  };
};
