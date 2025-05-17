import React, { useState } from "react";
import s from "./Factories.module.css";
import { useSelector } from "react-redux";
import { Button } from "../../../shared/ui/Button/Button";
import { Input } from "../../../shared/ui/Input/Input";
import { useAddWorkshopMutation, useGetWorkshopsQuery } from "./api";
import { WorkshopItem } from "./ui/WorkshopItem";

function Factories() {
  const userRole = useSelector((state) => state.accountSlice.user?.role);

  const [form, setForm] = useState({
    title: "",
    tons: "",
  });

  const { data, refetch } = useGetWorkshopsQuery();
  const [addWorkshop] = useAddWorkshopMutation();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "tons" ? Number(value) : value,
    }));
  };

  const handlerAddWorkshop = async () => {
    try {
      await addWorkshop(form).unwrap();
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
      <h1 className={s.title}>Управление цехами</h1>
      <div className={s.content}>
        <Input
          placeholder={"Введите название фабрики ..."}
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
          <Button variant="primary" onClick={handlerAddWorkshop}>
            Добавить новую фабрику
          </Button>
        )}
      </div>

      <div className={s.workshopList}>
        {data?.map((item) => (
          <WorkshopItem
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

export default Factories;
