import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import styles from "./TodoList.module.css";

//uuid?

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(0);

  const addTodoToList = (todo) => {
    setTodos(() => [...todos, { todo, checked: false }]);
  };

  const deleteTodo = (index) => {
    let todosList = [...todos];
    todosList.splice(index, 1);
    setTodos(todosList);
    if (todos[index].checked) {
      setCompleted(completed - 1);
    }
  };

  const handleDoubleClick = (index) => {
    deleteTodo(index);
  };

  const resetList = () => {
    setTodos([]);
  };

  const checkTodo = (index) => {
    let todosList = [...todos];
    const check = todosList[index].checked;
    setTodos(() => {
      todosList[index].checked = !check;
      return todosList;
    });
    check ? setCompleted(completed - 1) : setCompleted(completed + 1);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.checked));
    setCompleted(0);
  };

  return (
    <div className={styles.wrapper}>
      <TodoForm
        onSubmit={addTodoToList}
        resetList={resetList}
        clearCompleted={clearCompleted}
        completed={completed}
      />
      {todos.length ? (
        todos.map((todos, index) => {
          return (
            <div
              key={index}
              onDoubleClick={() => handleDoubleClick(index)}
            >
              <Todo
                index={index}
                text={todos.todo}
                checked={todos.checked}
                deleteTodo={deleteTodo}
                checkTodo={checkTodo}
              />
            </div>
          );
        })
      ) : (
        <h2 className={styles.h2}>
          No tasks yet...
          <br />
          *sadface*
        </h2>
      )}
    </div>
  );
}

export default TodoList;
