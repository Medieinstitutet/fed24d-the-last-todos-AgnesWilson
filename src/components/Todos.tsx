import { useState } from "react";

import type { Todo } from "../models/todoType";
import { InputNewTask } from "./InputNewTask";
import { PrintTodo } from "./PrintTodos";
import { SortingTodos } from "./SortingTodos";
import { initialTodos } from "../models/initialTodos";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem("todos") || JSON.stringify(initialTodos)));

  const [filter, setFilter] = useState<"All" | "Completed" | "NotCompleted">("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

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

  // Filtrera vilka Todos som visas (alla, klara, oklara)
  // + sortera de i alfabetisk ordning (asc/ddesc) basetat på första bokstaven i "tasken"
  const filteredTodos = todos
  .filter(todo => {
    if (filter === "Completed") return todo.isCompleted;
    if (filter === "NotCompleted") return !todo.isCompleted;
    else return true;
  })
  .sort((a, b) => {
    if (sortOrder === "asc") {
      return a.task.localeCompare(b.task, "sv");
    } else {
      return b.task.localeCompare(a.task, "sv");
    }
  })

  // Togglar mellan A–Ö och Ö–A sortering
  const toggleSortOrder = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
  }


  localStorage.setItem("todos", JSON.stringify(todos));

  return <>
  < SortingTodos setFilter={setFilter} toggleSortOrder={toggleSortOrder}/>
  < InputNewTask addTodo={addTodo} />
  < PrintTodo printedTodo={filteredTodos} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
  </>;
}