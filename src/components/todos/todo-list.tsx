import type { Todo } from "@/types/todos";
import TodoItem from "./todo-item";

interface Props {
    todos: Todo[];
    onDeleteTodo: (todoId: string) => void;
}

const TodoList = ({ todos, onDeleteTodo }: Props) => {
    return (
        <ul className="flex flex-col gap-1 py-6">
            {todos.map((todo) => (
                <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} />
            ))}
        </ul>
    );
}

export default TodoList;