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
        <form className="grid grid-cols-[3fr_1fr] items-center gap-2 py-10" onSubmit={handleClick}>
        <input className="border-2 rounded-lg px-3 py-1" type="text" placeholder="Ex. Vattna blommorna" value={todo.task} onChange={handleChange}></input>
        <button className="bg-[#dc5c2a] border-2 rounded-md border-[#ffe762] [font-family:'Caveat', ] font-extrabold text-[#ffe762] text-2xl w-30">Lägg till</button>
        </form>
    </>
}