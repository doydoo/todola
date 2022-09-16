import React, { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ onSubmit, resetList, clearCompleted, completed }) {
  const [text, setText] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    if (text) {
      onSubmit(text);
    }
    setText("");
  }

  function handleInputChange(text) {
    setText(text.target.value);
  }

  return (
    <React.Fragment>
      <div className={styles.logo}>
        <h1 className={styles.h1}>тудула</h1>
        <h2 className={styles.h2}>{completed}</h2>
      </div>
      <form
        className={styles.TodoForm}
        onSubmit={handleFormSubmit}
      >
        <input
          className={styles.input}
          type="text"
          value={text}
          placeholder="Put task..."
          autoFocus
          onChange={(text) => handleInputChange(text)}
        />
        <button
          className={styles.submitButton}
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        <button
          onClick={resetList}
          className={styles.resetButton}
          title='Reset tasks'
        >
          <img src="https://img.icons8.com/windows/32/000000/refresh.png" />
        </button>
        <button
          onClick={clearCompleted}
          className={styles.emptyButton}
          title={'Remove completed tasks'}
        >
          <img
            className={styles.img}
            src="https://img.icons8.com/windows/32/000000/trash.png"
          />
        </button>
      </div>
    </React.Fragment>
  );
}

export default TodoForm;
