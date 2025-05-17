import { Button } from "../../../../shared/ui/Button/Button";
import s from "./PlantItem.module.css";
import { useState } from "react";
import { Input } from "../../../../shared/ui/Input/Input";
import { useDeleteFactoryMutation, useUpdateFactoryMutation } from "../api";

export function PlantItem({ id, title, tons, refetch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ title, tons });
  const [deleteFactory] = useDeleteFactoryMutation();
  const [updateFactory] = useUpdateFactoryMutation();

  const handleEdit = async () => {
    try {
      await updateFactory({ id, ...editForm }).unwrap();
      refetch();
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteFactory(id).unwrap();
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  if (isEditing) {
    return (
      <div className={s.plantItem}>
        <div className={s.info}>
          <Input
            value={editForm.title}
            onChange={(e) =>
              setEditForm((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Название завода"
          />
          <Input
            type="number"
            value={editForm.tons}
            onChange={(e) =>
              setEditForm((prev) => ({ ...prev, tons: Number(e.target.value) }))
            }
            placeholder="Количество тонн"
          />
        </div>
        <div className={s.actions}>
          <Button variant="primary" onClick={handleEdit}>
            Сохранить
          </Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            Отмена
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={s.plantItem}>
      <div className={s.info}>
        <span className={s.title}>{title}</span>
        <span className={s.tons}>{tons} тонн</span>
      </div>
      <div className={s.actions}>
        <Button variant="primary" onClick={() => setIsEditing(true)}>
          Изменить
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Удалить
        </Button>
      </div>
    </div>
  );
}
