import React, { useState, useEffect } from "react";
import styles from "./Calculator.module.css";
import {
  useGetFactoryQuery,
  useGetWorkshopsQuery,
  useSubmitCalcMutation,
} from "./api";
import { Input } from "../../shared/ui/Input/Input";
import { useSelector } from "react-redux";

function Calculator() {
  const userId = useSelector((state) => state.accountSlice.user?.id);
  const { data: factories } = useGetFactoryQuery();
  const { data: wordshops } = useGetWorkshopsQuery();

  const [submitCalc] = useSubmitCalcMutation();

  const [costMatrix, setCostMatrix] = useState([]);
  const [result, setResult] = useState(null);
  const [taskName, setTaskName] = useState("");

  // Создаем матрицу с нулями на основе количества factories и wordshops
  useEffect(() => {
    if (factories && wordshops) {
      const newMatrix = Array(factories.length)
        .fill()
        .map(() => Array(wordshops.length).fill(0));
      setCostMatrix(newMatrix);
    }
  }, [factories, wordshops]);

  const handleCostChange = (rowIndex, colIndex, value) => {
    const newValue = value === "" ? 0 : Number(value);
    const newMatrix = costMatrix.map((row, i) => {
      if (i === rowIndex) {
        return row.map((cell, j) => (j === colIndex ? newValue : cell));
      }
      return row;
    });
    setCostMatrix(newMatrix);
  };

  const handleSubmit = async () => {
    if (!userId) {
      console.error("User ID is not available");
      return;
    }

    try {
      const result = await submitCalc({
        userId: userId,
        suppliers: factories.map((f) => f.tons),
        consumers: wordshops.map((w) => w.tons),
        costMatrix: costMatrix,
        method: "northwest",
        name: taskName || "Без названия",
      }).unwrap();
      setResult(result);
    } catch (error) {
      console.error("Failed to submit calculation:", error);
    }
  };

  const handleReset = () => {
    setResult(null);
    setTaskName("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Калькулятор</h1>
      <div className={styles.content}>
        <div className={styles.tableContainer}>
          <Input
            type="text"
            placeholder="Названия задачи"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Заводы/Фабрики</th>
                {wordshops?.map((item) => (
                  <th key={item._id}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {factories?.map((factory, rowIndex) => (
                <tr key={factory._id}>
                  <td>{factory.title}</td>
                  {(result ? result.allocation : costMatrix)[rowIndex]?.map(
                    (cell, colIndex) => (
                      <td key={`cell-${rowIndex}-${colIndex}`}>
                        {result ? (
                          <span className={styles.resultCell}>{cell}</span>
                        ) : (
                          <input
                            type="number"
                            value={cell}
                            onChange={(e) =>
                              handleCostChange(
                                rowIndex,
                                colIndex,
                                e.target.value
                              )
                            }
                            className={styles.input}
                          />
                        )}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {result && (
          <div className={styles.resultInfo}>
            <p>Общая стоимость: {result.totalCost} KGS</p>
            <p>Сбалансированная задача: {result.balanced ? "Да" : "Нет"}</p>
          </div>
        )}
        <div className={styles.buttonContainer}>
          {result ? (
            <button onClick={handleReset} className={styles.resetButton}>
              Начать заново
            </button>
          ) : (
            <button onClick={handleSubmit} className={styles.submitButton}>
              Рассчитать
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
