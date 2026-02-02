import type { Todo } from "@/types/todos";
import TodoItem from "./todo-item";

interface Props {
    todos: Todo[];
}

const TodoList = ({ todos }: Props) => {
    return (
        <ul className="flex flex-col gap-1 py-6 p-2">
            {todos.map((todo) => (
                <TodoItem todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;