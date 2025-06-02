import { useState } from "react";

import type { Todo } from "../models/todoType";
import { InputNewTask } from "./InputNewTask";
import { PrintTodo } from "./PrintTodos";

const initialTodos: Todo[] = [
  { id: 1, task: "Köp mjölk", isCompleted: false },
  { id: 2, task: "Skriv klart rapporten", isCompleted: true },
  { id: 3, task: "Städa lägenheten", isCompleted: false },
];

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

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

  return <>
  < InputNewTask addTodo={addTodo} />
  < PrintTodo printedTodo={todos} toggleCompleted={toggleCompleted}/>
  </>;
}