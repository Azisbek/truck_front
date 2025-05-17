import React, { useState } from "react";
import s from "./Plants.module.css";
import { useSelector } from "react-redux";
import { Button } from "../../../shared/ui/Button/Button";
import { Input } from "../../../shared/ui/Input/Input";
import { useAddFactoryMutation, useGetFactoriesQuery } from "./api";
import { PlantItem } from "./ui/PlantItem";

function Plants() {
  const userRole = useSelector((state) => state.accountSlice.user?.role);

  const [form, setForm] = useState({
    title: "",
    tons: "",
  });

  const { data, refetch } = useGetFactoriesQuery();
  const [addFactory] = useAddFactoryMutation();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "tons" ? Number(value) : value,
    }));
  };

  const handlerAddPlant = async () => {
    try {
      await addFactory(form).unwrap();
      refetch();
      setForm({
        title: "",
        tons: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Управление заводами</h1>
      <div className={s.content}>
        <Input
          placeholder={"Введите название завода ..."}
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <Input
          type="number"
          placeholder={"Введите кол-во товаров ..."}
          name="tons"
          value={form.tons}
          onChange={handleChange}
        />

        {userRole === "admin" && (
          <Button variant="primary" onClick={handlerAddPlant}>
            Добавить новый завод
          </Button>
        )}
      </div>

      <div className={s.plantList}>
        {data?.map((item) => (
          <PlantItem
            key={item._id}
            id={item._id}
            title={item.title}
            tons={item.tons}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
}

export default Plants;
