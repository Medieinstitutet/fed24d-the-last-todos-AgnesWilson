import { useState, type ChangeEvent, type FormEvent } from "react"
import type { Todo } from "../models/todoType";


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
        <form onSubmit={handleClick}>
        <input type="text" placeholder="Ex. Vattna blommorna" value={todo.task} onChange={handleChange}></input>
        <button>Lägg till</button>
        </form>
    </>
}