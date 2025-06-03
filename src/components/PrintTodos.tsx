import type { Todo } from "../models/todoType";

type todoProps = {
    printedTodo: Todo[];
    toggleCompleted: (id: number) => void;
    removeTodo: (id: number) => void;
}

export const PrintTodo = ({ printedTodo, toggleCompleted, removeTodo }: todoProps) => {

    return <>
    <div className="bg-[url('/assets/notes.png')] bg-cover min-h-[800px]">
        <ul className="py-20">
            {printedTodo.map((todo) => (
                <li key={todo.id} className="list-style-none py-1.5">
                    <h3 className="text-black">{todo.task}</h3>
                    <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleCompleted(todo.id)}/>
                    <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
                </li>
            ))}
        </ul>
    </div>
    </>
}