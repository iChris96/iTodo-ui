import type { Todo } from '@/types/todos';
import { Trash2Icon } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';

interface Props {
    todo: Todo;
    onDeleteTodo: (todoId: string) => void;
    onEditTodo: (todo: Todo) => void;
}

const TodoItem = ({ todo, onDeleteTodo, onEditTodo }: Props) => {
    // const [checked, setChecked] = React.useState(false);

    const handleDeleteClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onDeleteTodo(todo.id);
    };

    const handleCheckboxClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <li key={todo.id} className="bg-brand flex justify-between items-center p-4 border-border border-3" onClick={() => onEditTodo(todo)}>
            <Checkbox
                className="bg-white data-[state=checked]:bg-white rounded-full w-8 h-8"
                onClick={handleCheckboxClick}
            />
            <h4 >{todo.title}</h4>
            <Button
                variant="reverse"
                size="icon"
                className='hover:cursor-pointer'
                onClick={handleDeleteClick}
            >
                <Trash2Icon className="w-4 h-4" />
            </Button>
        </li>
    );
};

export default TodoItem;
