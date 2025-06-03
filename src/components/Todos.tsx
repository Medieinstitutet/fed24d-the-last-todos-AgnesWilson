import { useState } from "react";

import type { Todo } from "../models/todoType";
import { InputNewTask } from "./InputNewTask";
import { PrintTodo } from "./PrintTodos";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem("todos") || "[]"));

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, { ...newTodo, id: Date.now()}]);
  };

  const toggleCompleted = (id: number) => {
    const completedStatus = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, isCompleted : !todo.isCompleted };
    }
    return todo;
  });
  setTodos(completedStatus);
};

  localStorage.setItem("todos", JSON.stringify(todos));

  return <>
  < InputNewTask addTodo={addTodo} />
  < PrintTodo printedTodo={todos} toggleCompleted={toggleCompleted}/>
  </>;
}