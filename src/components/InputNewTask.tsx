import { useState, type ChangeEvent, type FormEvent } from "react"

import type { Todo } from "../models/todoType";
import { Button } from "./Button";


type AddTodoProps = {
  addTodo: (newTodo: Todo) => void;
};

export const InputNewTask = ({addTodo}: AddTodoProps) => {

    const [todo, setTodo] = useState<Todo>({
    id: 0,
    task: "",
    isCompleted: false,
    });

    const handleClick = (e: FormEvent)=> {
        e.preventDefault();
        addTodo(todo); 
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, task: e.target.value})
    }

    return <>
        <form className="grid grid-cols-[3fr_1fr] items-center gap-2 py-10" onSubmit={handleClick}>
        <input className="border-2 rounded-lg px-3 py-1" type="text" placeholder="Ex. Vattna blommorna" value={todo.task} onChange={handleChange}></input>
        <Button>Lägg till</Button>
        </form>
    </>
}