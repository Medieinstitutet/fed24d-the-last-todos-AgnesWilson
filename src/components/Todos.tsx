import { useState } from "react";

import type { Todo } from "../models/todoType";
import { InputNewTask } from "./InputNewTask";
import { PrintTodo } from "./PrintTodos";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem("todos") || "[]"));

  // Lägg till ny todo
  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, { ...newTodo, id: Date.now()}]);
  };

  // Toggla klar/inte klar ststus
  const toggleCompleted = (id: number) => {
    const completedStatus = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, isCompleted : !todo.isCompleted };
    }
    return todo;
  });
  setTodos(completedStatus);
};

  // Ta bort Todo
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  localStorage.setItem("todos", JSON.stringify(todos));

  return <>
  < InputNewTask addTodo={addTodo} />
  < PrintTodo printedTodo={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
  </>;
}