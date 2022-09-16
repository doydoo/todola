import React from "react";
import styles from "./Todo.module.css";

function Todo({ text, checked, index, deleteTodo, checkTodo }) {
  return (
    <div
      className={styles.Todo}
      style={{
        backgroundColor: checked
          ? "rgb(141, 174, 185)"
          : styles.Todo.backgroundColor,
        color: checked ? "white" : "black",
        boxShadow: checked ? "none" : styles.Todo.boxShadow,
      }}
    >
      <div className={styles.icons}>
        <img
          className={styles.iconLines}
          src="https://img.icons8.com/metro/26/000000/menu.png"
        />
        <button
          onClick={() => checkTodo(index)}
          className={styles.iconCheck}
        >
          <img src="https://img.icons8.com/windows/32/1A1A1A/checked-checkbox--v1.png" />
        </button>
        <button
          onClick={() => deleteTodo(index)}
          className={styles.iconDelete}
        >
          <img src="https://img.icons8.com/windows/32/1A1A1A/delete-message.png" />
        </button>
      </div>
      <hr />
      <p className={styles.p}>{text}</p>
    </div>
  );
}

export default Todo;
