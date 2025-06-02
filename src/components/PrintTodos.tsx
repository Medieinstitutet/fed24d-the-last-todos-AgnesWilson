import type { Todo } from "../models/todoType";

type todoProps = {
    printedTodo: Todo[];
    toggleCompleted: (id: number) => void;
}

export const PrintTodo = ({ printedTodo, toggleCompleted }: todoProps) => {

    return <>

    <ul>
        {printedTodo.map((todo) => (
            <li key={todo.id}>
                <h3>{todo.task}</h3>
                <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleCompleted(todo.id)}/>
            </li>
        ))}
    </ul>
    </>
}