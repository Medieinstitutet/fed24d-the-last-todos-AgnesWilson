import type { Todo } from "../models/todoType";

type todoProps = {
    printedTodo: Todo[];
    toggleCompleted: (id: number) => void;
    removeTodo: (id: number) => void;
}

export const PrintTodo = ({ printedTodo, toggleCompleted, removeTodo }: todoProps) => {

    return <>
    <div className="bg-[url('/assets/notes.png')] bg-cover min-h-[800px] max-w-[400px] mx-auto">
        <ul className="py-24 px-10">
            {printedTodo.map((todo) => (
                <li key={todo.id} className="list-none py-1.5 grid grid-cols-[1fr_40px_40px] items-center gap-2">
                    <h3 className={
                            todo.isCompleted
                            ? "[font-family:'Caveat',cursive] font-bold text-3xl text-gray-700 line-through"
                            : "[font-family:'Caveat',cursive] font-bold text-3xl text-gray-700"
                        }>{todo.task}
                    </h3>
                    <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleCompleted(todo.id)}/>
                    <button onClick={() => removeTodo(todo.id)}><span className="material-symbols-outlined text-black">delete</span></button>
                </li>
            ))}
        </ul>
    </div>
    </>
}