import type { Todo } from "@/types/todos";
import TodoItem from "./todo-item";

interface Props {
    todos: Todo[];
    onDeleteTodo: (todoId: string) => void;
    onEditTodo: (todo: Todo) => void;
    onToggleComplete: (todoId: string) => void;
}

const TodoList = ({ todos, onDeleteTodo, onEditTodo, onToggleComplete }: Props) => {
    return (
        <ul className="flex flex-col gap-1 py-6">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo} onToggleComplete={onToggleComplete} />
            ))}
        </ul>
    );
}

export default TodoList;