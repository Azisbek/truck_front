import { useState } from "react";
import { useLoginMutation } from "../api";

export const useSignIn = () => {
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      if (!formData.email) {
        throw new Error("Введите email");
      }
      if (!formData.password) {
        throw new Error("Введите пароль");
      }

      const submitData = {
        email: formData.email,
        password: formData.password,
      };

      const result = await login(submitData).unwrap();
      return result;
    } catch (err) {
      setError(err.message || "Ошибка при входе");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    isLoading: isLoading || isLoginLoading,
    error,
  };
}; 