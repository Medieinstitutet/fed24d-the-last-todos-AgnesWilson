import type { Todo } from "../models/todoType";

type todoProps = {
    printedTodo: Todo[];
    toggleCompleted: (id: number) => void;
    removeTodo: (id: number) => void;
}

export const PrintTodo = ({ printedTodo, toggleCompleted, removeTodo }: todoProps) => {

    return <>

    <ul>
        {printedTodo.map((todo) => (
            <li key={todo.id}>
                <h3>{todo.task}</h3>
                <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleCompleted(todo.id)}/>
                <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
            </li>
        ))}
    </ul>
    </>
}